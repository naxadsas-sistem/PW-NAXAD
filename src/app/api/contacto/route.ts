import { NextRequest, NextResponse } from "next/server";

// ─── Tipos ───────────────────────────────────────────────────────────
interface ContactFormData {
  name: string;
  organization: string;
  email: string;
  phone: string;
  needType: string;
  message: string;
  privacyAccepted: boolean;
}

interface ResendSuccessResponse {
  id: string;
}

interface ResendErrorResponse {
  statusCode: number;
  message: string;
  name: string;
}

// ─── Rate limiting básico en memoria ─────────────────────────────────
// En Vercel serverless cada instancia tiene su propio Map,
// así que esto protege contra ráfagas de un mismo request burst,
// no reemplaza un WAF real. Suficiente para anti-spam MVP.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minuto
const RATE_LIMIT_MAX = 3; // máx 3 envíos por IP por minuto

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// ─── Validación server-side ──────────────────────────────────────────
function validateFormData(
  data: unknown
): { ok: true; data: ContactFormData } | { ok: false; error: string } {
  if (!data || typeof data !== "object") {
    return { ok: false, error: "Datos de formulario inválidos." };
  }

  const d = data as Record<string, unknown>;

  // Campos requeridos con tipo string
  const stringFields = [
    "name",
    "organization",
    "email",
    "phone",
    "needType",
    "message",
  ] as const;

  for (const field of stringFields) {
    if (typeof d[field] !== "string" || (d[field] as string).trim() === "") {
      return { ok: false, error: `El campo "${field}" es requerido.` };
    }
  }

  const name = (d.name as string).trim();
  const organization = (d.organization as string).trim();
  const email = (d.email as string).trim();
  const phone = (d.phone as string).trim();
  const needType = (d.needType as string).trim();
  const message = (d.message as string).trim();
  const privacyAccepted = d.privacyAccepted;

  // Validaciones de longitud
  if (name.length < 3) {
    return { ok: false, error: "El nombre debe tener al menos 3 caracteres." };
  }
  if (organization.length < 2) {
    return {
      ok: false,
      error: "La organización debe tener al menos 2 caracteres.",
    };
  }
  if (message.length < 10) {
    return {
      ok: false,
      error: "El mensaje debe tener al menos 10 caracteres.",
    };
  }
  if (phone.length < 8) {
    return {
      ok: false,
      error: "El teléfono debe tener al menos 8 caracteres.",
    };
  }

  // Validación de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { ok: false, error: "El email no tiene un formato válido." };
  }

  // Checkbox de privacidad
  if (privacyAccepted !== true) {
    return {
      ok: false,
      error: "Debés aceptar el tratamiento de datos para enviar la consulta.",
    };
  }

  // Anti-spam: honeypot implícito — si hay campos extra sospechosos, rechazar
  const allowedFields = new Set([
    "name",
    "organization",
    "email",
    "phone",
    "needType",
    "message",
    "privacyAccepted",
  ]);
  const extraFields = Object.keys(d).filter((k) => !allowedFields.has(k));
  if (extraFields.length > 0) {
    return { ok: false, error: "Campos no reconocidos en el formulario." };
  }

  return {
    ok: true,
    data: { name, organization, email, phone, needType, message, privacyAccepted },
  };
}

// ─── Handler POST ────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  // 1. Verificar API key configurada
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("[contacto/route] RESEND_API_KEY no configurada.");
    return NextResponse.json(
      { error: "Error de configuración del servidor. Intentá nuevamente más tarde." },
      { status: 500 }
    );
  }

  // 2. Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiados envíos. Esperá un momento antes de intentar de nuevo." },
      { status: 429 }
    );
  }

  // 3. Parsear body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "El cuerpo de la solicitud no es JSON válido." },
      { status: 400 }
    );
  }

  // 4. Validar datos
  const validation = validateFormData(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const { data } = validation;

  // 5. Enviar email vía Resend REST API (sin dependencia npm)
  const emailHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #151A21; color: white; padding: 24px 32px; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; font-size: 20px; font-weight: 600;">Nueva consulta desde naxadsystem.com</h1>
      </div>
      <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 140px; vertical-align: top;">Nombre</td>
            <td style="padding: 8px 0; color: #151A21;">${escapeHtml(data.name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600; vertical-align: top;">Organización</td>
            <td style="padding: 8px 0; color: #151A21;">${escapeHtml(data.organization)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600; vertical-align: top;">Email</td>
            <td style="padding: 8px 0; color: #151A21;"><a href="mailto:${escapeHtml(data.email)}" style="color: #2563EB;">${escapeHtml(data.email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600; vertical-align: top;">Teléfono</td>
            <td style="padding: 8px 0; color: #151A21;">${escapeHtml(data.phone)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600; vertical-align: top;">Interés</td>
            <td style="padding: 8px 0; color: #151A21;">${escapeHtml(data.needType)}</td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 16px 0 8px 0; color: #64748b; font-weight: 600;">Mensaje</td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 8px 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0; color: #151A21; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(data.message)}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8;">
          IP: ${escapeHtml(ip)} · Consentimiento de datos: aceptado · Enviado desde el formulario de contacto de naxadsystem.com
        </div>
      </div>
    </div>
  `;

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: `NAXAD Web <${process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev"}>`,
        to: [process.env.CONTACT_EMAIL ?? "contacto@naxadsystem.com"],
        reply_to: data.email,
        subject: `[NAXAD] Consulta de ${data.name} — ${data.needType}`,
        html: emailHtml,
      }),
    });

    // 6. Verificar respuesta de Resend
    const resendData = (await resendResponse.json()) as
      | ResendSuccessResponse
      | ResendErrorResponse;

    if (!resendResponse.ok) {
      const errorData = resendData as ResendErrorResponse;
      console.error("[contacto/route] Resend error:", errorData);
      return NextResponse.json(
        {
          error:
            "No pudimos enviar tu consulta en este momento. Por favor intentá de nuevo o escribinos por WhatsApp.",
        },
        { status: 502 }
      );
    }

    const successData = resendData as ResendSuccessResponse;
    console.log("[contacto/route] Email enviado. Resend ID:", successData.id);

    return NextResponse.json(
      { success: true, messageId: successData.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("[contacto/route] Error de red al contactar Resend:", error);
    return NextResponse.json(
      {
        error:
          "Error de conexión con el servicio de email. Por favor intentá de nuevo.",
      },
      { status: 502 }
    );
  }
}

// ─── Utilidad: escapar HTML para prevenir XSS en el email ────────────
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
