"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ContactBackground } from "@/components/ui/ContactBackground";
import { siteConfig } from "@/config/site";
import {
  MessageSquare,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Loader2,
  Copy,
  Check,
  Clock,
} from "lucide-react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    needType: "DentalDesk (SaaS clínica dental)",
    message: "",
    privacyAccepted: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Validaciones en tiempo real
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isPhoneValid = formData.phone.trim().length >= 8;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const copyToClipboard = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-white text-[#151A21] overflow-hidden">
      {/* Fondo dinámico líquido y arquitectónico ultra-ligero */}
      <ContactBackground />

      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <Container>
          {/* Header de Página */}
          <div className="max-w-3xl mb-14 space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-xs font-semibold text-[#2563EB]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              <span>Canales oficiales de NAXAD</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#151A21] tracking-tight leading-tight">
              Hablemos de tu gestión.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Contanos sobre tu negocio o el producto del ecosistema que te interesa. Analizamos tu contexto para indicarte si adoptás una solución existente o construimos algo a tu medida.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Formulario Principal con Floating Labels y Micro-interacciones (7 columnas) */}
            <div className="lg:col-span-7 animate-fade-in-up delay-75">
              <Card className="relative p-6 sm:p-10 bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300">
                {submitted ? (
                  <div className="py-12 text-center space-y-5 animate-fade-in-up">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 size={32} />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-[#151A21]">
                        Consulta recibida correctamente
                      </h2>
                      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        Gracias por ponerte en contacto. Gabriel Zambrano revisará tu consulta personalmente y te responderemos en menos de 24 horas hábiles.
                      </p>
                    </div>
                    <div className="pt-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            organization: "",
                            email: "",
                            phone: "",
                            needType: "DentalDesk (SaaS clínica dental)",
                            message: "",
                            privacyAccepted: false,
                          });
                        }}
                        className="text-xs font-semibold hover:bg-slate-100"
                      >
                        Enviar otra consulta
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Formulario de relevamiento
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        * Campos requeridos
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Floating Label: Nombre y apellido */}
                      <div className="relative group">
                        <input
                          required
                          id="name"
                          type="text"
                          placeholder=" "
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="peer w-full h-12 pt-4 pb-1 px-3.5 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] focus:bg-white text-[#151A21] transition-all"
                        />
                        <label
                          htmlFor="name"
                          className="pointer-events-none absolute left-3.5 top-3.5 text-xs text-slate-500 transition-all duration-200 transform -translate-y-2 scale-90 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-2 peer-focus:text-[#2563EB] peer-focus:font-semibold"
                        >
                          Nombre y apellido *
                        </label>
                      </div>

                      {/* Floating Label: Organización / rubro */}
                      <div className="relative group">
                        <input
                          required
                          id="organization"
                          type="text"
                          placeholder=" "
                          value={formData.organization}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              organization: e.target.value,
                            })
                          }
                          className="peer w-full h-12 pt-4 pb-1 px-3.5 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] focus:bg-white text-[#151A21] transition-all"
                        />
                        <label
                          htmlFor="organization"
                          className="pointer-events-none absolute left-3.5 top-3.5 text-xs text-slate-500 transition-all duration-200 transform -translate-y-2 scale-90 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-2 peer-focus:text-[#2563EB] peer-focus:font-semibold"
                        >
                          Organización o rubro *
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Floating Label: Email con validación en tiempo real */}
                      <div className="relative group">
                        <input
                          required
                          id="email"
                          type="email"
                          placeholder=" "
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className={`peer w-full h-12 pt-4 pb-1 pl-3.5 pr-9 text-xs sm:text-sm bg-slate-50/70 border rounded-xl focus:outline-none focus:ring-2 focus:bg-white text-[#151A21] transition-all ${
                            formData.email && isEmailValid
                              ? "border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500/20"
                              : "border-slate-200 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
                          }`}
                        />
                        <label
                          htmlFor="email"
                          className="pointer-events-none absolute left-3.5 top-3.5 text-xs text-slate-500 transition-all duration-200 transform -translate-y-2 scale-90 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-2 peer-focus:text-[#2563EB] peer-focus:font-semibold"
                        >
                          Email de contacto *
                        </label>
                        {formData.email && (
                          <div className="absolute right-3 top-3.5">
                            {isEmailValid ? (
                              <CheckCircle2
                                size={16}
                                className="text-emerald-500 animate-fade-in-up"
                              />
                            ) : (
                              <span className="text-[10px] text-slate-400 font-mono">
                                @
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Floating Label: Teléfono con validación */}
                      <div className="relative group">
                        <input
                          required
                          id="phone"
                          type="tel"
                          placeholder=" "
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className={`peer w-full h-12 pt-4 pb-1 pl-3.5 pr-9 text-xs sm:text-sm bg-slate-50/70 border rounded-xl focus:outline-none focus:ring-2 focus:bg-white text-[#151A21] transition-all ${
                            formData.phone && isPhoneValid
                              ? "border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500/20"
                              : "border-slate-200 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
                          }`}
                        />
                        <label
                          htmlFor="phone"
                          className="pointer-events-none absolute left-3.5 top-3.5 text-xs text-slate-500 transition-all duration-200 transform -translate-y-2 scale-90 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-2 peer-focus:text-[#2563EB] peer-focus:font-semibold"
                        >
                          Teléfono o WhatsApp *
                        </label>
                        {formData.phone && isPhoneValid && (
                          <div className="absolute right-3 top-3.5">
                            <CheckCircle2
                              size={16}
                              className="text-emerald-500 animate-fade-in-up"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Selector de Producto / Necesidad */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#151A21] flex items-center justify-between">
                        <span>Interés en el ecosistema NAXAD</span>
                        <span className="text-[11px] text-slate-400 font-normal">
                          Seleccioná una opción
                        </span>
                      </label>
                      <div className="relative">
                        <select
                          value={formData.needType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              needType: e.target.value,
                            })
                          }
                          className="w-full h-12 px-3.5 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] focus:bg-white text-[#151A21] transition-all cursor-pointer"
                        >
                          <option value="DentalDesk (SaaS clínica dental)">
                            DentalDesk — SaaS para clínicas dentales
                          </option>
                          <option value="LautaroNutrición (Sistema nutrición / salud)">
                            LautaroNutrición — Gestión para profesionales de salud/nutrición
                          </option>
                          <option value="Pharmalyze AI (Piloto farmacias)">
                            Pharmalyze AI — Inteligencia de reposición de farmacias
                          </option>
                          <option value="Sistema de gestión a medida">
                            Desarrollo de sistema de gestión a medida
                          </option>
                          <option value="Diagnóstico de procesos y ordenamiento">
                            Diagnóstico y ordenamiento de procesos operativos
                          </option>
                          <option value="Otra consulta">
                            Otra consulta institucional o comercial
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Floating Label: Mensaje */}
                    <div className="relative group">
                      <textarea
                        required
                        id="message"
                        rows={4}
                        placeholder=" "
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="peer w-full pt-5 pb-2 px-3.5 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] focus:bg-white text-[#151A21] transition-all resize-none"
                      />
                      <label
                        htmlFor="message"
                        className="pointer-events-none absolute left-3.5 top-3.5 text-xs text-slate-500 transition-all duration-200 transform -translate-y-2 scale-90 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-2 peer-focus:text-[#2563EB] peer-focus:font-semibold"
                      >
                        ¿Qué proceso o necesidad querés resolver? *
                      </label>
                    </div>

                    {/* Checkbox de privacidad */}
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        required
                        type="checkbox"
                        id="privacy"
                        checked={formData.privacyAccepted}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            privacyAccepted: e.target.checked,
                          })
                        }
                        className="w-4 h-4 rounded border-slate-300 text-[#2563EB] bg-white focus:ring-[#2563EB] mt-0.5 cursor-pointer"
                      />
                      <label
                        htmlFor="privacy"
                        className="text-xs text-slate-600 leading-relaxed cursor-pointer"
                      >
                        Acepto el tratamiento confidencial de mis datos para ser contactado por NAXAD respecto a esta consulta.
                      </label>
                    </div>

                    {/* Botón de Envío con Micro-interacciones */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={loading}
                        className="w-full font-semibold group cursor-pointer bg-[#2563EB] text-white hover:bg-blue-700 shadow-sm transition-all duration-200 relative overflow-hidden"
                      >
                        {loading ? (
                          <span className="inline-flex items-center gap-2">
                            <Loader2 size={16} className="animate-spin" />
                            <span>Procesando y enviando consulta...</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center gap-2">
                            <span>Enviar consulta a NAXAD</span>
                            <ArrowRight
                              size={16}
                              className="transition-transform group-hover:translate-x-1 duration-200"
                            />
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </div>

            {/* Columna Lateral: Cards de Contacto Dinámicas Estilo Stripe Moderno (5 columnas) */}
            <div className="lg:col-span-5 space-y-5">
              {/* Card 1: WhatsApp Dinámica con Glow y Hover */}
              <div className="animate-fade-in-up delay-150">
                <Card className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgb(16,185,129,0.12)] hover:border-emerald-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110">
                      <MessageSquare size={20} />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm sm:text-base font-bold text-[#151A21]">
                          Conversación por WhatsApp
                        </h3>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                          Online
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Contacto directo e inmediato para dudas puntuales sobre DentalDesk, LautaroNutrición, Pharmalyze AI o presupuestos.
                      </p>
                      <div className="pt-1">
                        <a
                          href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                        >
                          <span>Iniciar chat en WhatsApp</span>
                          <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Card 2: Email Oficial con Acción de Copiado Rápido */}
              <div className="animate-fade-in-up delay-225">
                <Card className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgb(37,99,235,0.12)] hover:border-blue-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-[#2563EB] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110">
                      <Mail size={20} />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-[#151A21]">
                        Correo Electrónico Oficial
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Para pliegos, documentación técnica o presentaciones formales de empresa:
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="text-xs font-mono text-[#151A21] hover:text-[#2563EB] transition-colors font-semibold"
                        >
                          {siteConfig.contact.email}
                        </a>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(siteConfig.contact.email)}
                          className="p-1 rounded-md text-slate-400 hover:text-[#2563EB] hover:bg-blue-50 transition-all text-[11px] inline-flex items-center gap-1 cursor-pointer"
                          title="Copiar email"
                        >
                          {copiedEmail ? (
                            <>
                              <Check size={12} className="text-emerald-500" />
                              <span className="text-[10px] text-emerald-600 font-semibold">Copiado</span>
                            </>
                          ) : (
                            <Copy size={12} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Card 3: Mapa Interactivo / Estilizado de CABA (Minimalista, Escala Monocromática Stripe) */}
              <div className="animate-fade-in-up delay-300">
                <Card className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-slate-300 overflow-hidden">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                          <MapPin size={16} className="text-[#2563EB]" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[#151A21]">
                            Buenos Aires, Argentina
                          </h4>
                          <span className="text-[10px] font-mono text-slate-500">
                            34°36&apos;S 58°22&apos;W · CABA
                          </span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                        <Clock size={12} className="text-slate-400" />
                        <span>9:00 - 18:00 ART</span>
                      </div>
                    </div>

                    {/* Gráfico Vectorial Estilizado (Mapa Minimalista de CABA / Río de la Plata) */}
                    <div className="relative h-28 w-full rounded-xl bg-slate-50 border border-slate-200/80 overflow-hidden flex items-center justify-center">
                      {/* Trama urbana de fondo */}
                      <svg
                        className="absolute inset-0 w-full h-full opacity-40 text-slate-300"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <pattern
                            id="mapGrid"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M 20 0 L 0 0 0 20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="0.8"
                            />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#mapGrid)" />
                        {/* Silueta de la costa del Río de la Plata */}
                        <path
                          d="M -10 90 Q 60 70, 140 45 T 320 10 T 500 5"
                          fill="none"
                          stroke="#94A3B8"
                          strokeWidth="2"
                        />
                      </svg>

                      {/* Pin Central con Pulso Azul Eléctrico */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="relative flex items-center justify-center">
                          <span className="absolute h-6 w-6 rounded-full bg-[#2563EB]/25 animate-ping" />
                          <span className="h-3 w-3 rounded-full bg-[#2563EB] shadow-xs ring-4 ring-white" />
                        </div>
                        <span className="mt-1.5 text-[10px] font-semibold bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md border border-slate-200 text-[#151A21] shadow-2xs">
                          Operación Central NAXAD
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
                      Atención a clientes y empresas en toda el Área Metropolitana de Buenos Aires y de forma remota para todo el país.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Card 4: Confidencialidad y Compromiso B2B */}
              <div className="animate-fade-in-up delay-300">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <ShieldCheck size={18} className="text-[#E76F73] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-[#151A21] font-semibold">
                      Acuerdo de confidencialidad (NDA):
                    </strong>{" "}
                    Garantizamos reserva operativa total sobre las métricas, pacientes y flujos de trabajo de tu negocio desde la primera llamada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
