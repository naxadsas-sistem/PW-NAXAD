"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Check,
  Copy,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/config/site";

interface ContactMethod {
  id: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
  action: string;
  href: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  status: string;
  statusColor: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: "whatsapp",
    icon: MessageSquare,
    title: "Conversación por WhatsApp",
    description:
      "Contacto directo e inmediato para dudas puntuales sobre DentalDesk, LautaroNutrición, Pharmalyze AI o presupuestos.",
    action: "Iniciar chat en WhatsApp",
    href: `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "") || "5491123456789"}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage || "Hola, me gustaría conversar sobre la gestión de mi negocio.")}`,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
    status: "Online",
    statusColor: "bg-emerald-500",
  },
  {
    id: "email",
    icon: Mail,
    title: "Correo Electrónico Oficial",
    description:
      "Para pliegos, documentación técnica o presentaciones formales de empresa:",
    action: siteConfig.contact.email || "contacto@naxad.com",
    href: `mailto:${siteConfig.contact.email || "contacto@naxad.com"}`,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    status: "Respuesta <24hs",
    statusColor: "bg-blue-500",
  },
  {
    id: "ubicacion",
    icon: MapPin,
    title: "Buenos Aires, Argentina",
    description:
      "Atención a clientes y empresas en toda el AMBA y de forma remota para todo el país.",
    action: "34°36'S 58°22'W · CABA",
    href: "https://maps.google.com/?q=Buenos+Aires+Argentina",
    color: "from-slate-600 to-slate-800",
    bgColor: "bg-slate-100",
    borderColor: "border-slate-300",
    textColor: "text-slate-700",
    status: "9:00 - 18:00 ART",
    statusColor: "bg-slate-600",
  },
];

export default function ContactCards() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div className="space-y-4">
      {contactMethods.map((method, idx) => {
        const isActive = activeId === method.id;
        const Icon = method.icon;

        return (
          <motion.div
            key={method.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            onHoverStart={() => setActiveId(method.id)}
            onHoverEnd={() => setActiveId(null)}
            onClick={() => setActiveId(isActive ? null : method.id)}
            className="block group cursor-pointer"
          >
            <div
              className={`relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 overflow-hidden ${
                isActive
                  ? "bg-white border-slate-300 shadow-xl shadow-slate-900/5 scale-[1.01]"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-md"
              }`}
            >
              {/* Gradiente de fondo sutil al hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none`}
              />

              {/* Indicador superior animado */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${method.color} transform origin-left transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />

              <div className="relative flex items-start gap-4">
                {/* Icono con fondo dinámico */}
                <div
                  className={`inline-flex p-3 rounded-xl transition-all duration-300 shrink-0 ${
                    isActive
                      ? `bg-gradient-to-br ${method.color} text-white shadow-md scale-105`
                      : `${method.bgColor} ${method.textColor}`
                  }`}
                >
                  <Icon
                    size={20}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="flex-1 space-y-2 min-w-0">
                  {/* Header con status */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-[#151A21] truncate">
                      {method.title}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold shrink-0 ${method.bgColor} ${method.textColor} border ${method.borderColor}`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${method.statusColor} ${
                          method.id === "whatsapp" ? "animate-ping" : ""
                        }`}
                      />
                      {method.status}
                    </span>
                  </div>

                  {/* Descripción */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {method.description}
                  </p>

                  {/* Acción según canal */}
                  <div className="pt-1">
                    {method.id === "email" ? (
                      <div className="flex items-center gap-2 flex-wrap">
                        <a
                          href={method.href}
                          className="text-xs font-mono text-[#151A21] hover:text-[#2563EB] transition-colors font-semibold py-1 inline-flex items-center gap-1"
                        >
                          <span>{method.action}</span>
                        </a>
                        <button
                          type="button"
                          onClick={(e) => handleCopy(e, method.action)}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all text-xs cursor-pointer border border-slate-200"
                          title="Copiar email al portapapeles"
                        >
                          <AnimatePresence mode="wait">
                            {copiedEmail ? (
                              <motion.div
                                key="check"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="flex items-center gap-1 text-emerald-600 font-semibold"
                              >
                                <Check size={12} className="text-emerald-500" />
                                <span className="text-[10px]">Copiado</span>
                              </motion.div>
                            ) : (
                              <motion.div
                                key="copy"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="flex items-center gap-1 text-slate-600"
                              >
                                <Copy size={12} />
                                <span className="text-[10px]">Copiar</span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                      </div>
                    ) : method.id === "whatsapp" ? (
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors py-1"
                      >
                        <span>{method.action}</span>
                        <ArrowRight
                          size={13}
                          className="transition-transform group-hover:translate-x-1 duration-200"
                        />
                      </a>
                    ) : (
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-mono text-slate-600 font-medium">
                          {method.action}
                        </span>
                        <a
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <span>Ver mapa</span>
                          <ArrowRight
                            size={12}
                            className="transition-transform group-hover:translate-x-0.5"
                          />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Micro-visual animado para ubicación */}
                  {method.id === "ubicacion" && (
                    <div className="pt-2">
                      <div className="relative h-16 w-full rounded-xl bg-slate-50 border border-slate-200/80 overflow-hidden flex items-center justify-between px-3">
                        <div className="flex items-center gap-2 z-10">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                          </span>
                          <span className="text-[11px] font-mono font-medium text-slate-700">
                            Base Operativa Central
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 z-10 bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded-md border border-slate-100">
                          <Clock size={11} className="text-slate-400" />
                          <span>GMT-3</span>
                        </div>

                        {/* Radar sweep sutil al hover */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transition-transform duration-1000 ${
                            isActive ? "translate-x-full" : "-translate-x-full"
                          }`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Card de NDA y Confidencialidad */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5"
      >
        <div className="p-2 rounded-xl bg-rose-50 border border-rose-100 text-[#E76F73] shrink-0 mt-0.5">
          <ShieldCheck size={18} />
        </div>
        <p className="text-xs text-slate-600 leading-relaxed font-normal">
          <strong className="text-[#151A21] font-semibold">
            Acuerdo de confidencialidad (NDA):
          </strong>{" "}
          Garantizamos reserva operativa total sobre las métricas, pacientes y
          flujos de trabajo de tu negocio desde la primera llamada.
        </p>
      </motion.div>
    </div>
  );
}

export { ContactCards };
