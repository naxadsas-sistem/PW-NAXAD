"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ContactBackground } from "@/components/ui/ContactBackground";
import ContactCards from "@/components/ContactCards";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Loader2,
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

  // Validaciones en tiempo real
  const isNameValid = formData.name.trim().length >= 3;
  const isOrgValid = formData.organization.trim().length >= 2;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isPhoneValid = formData.phone.trim().length >= 8;
  const isMessageValid = formData.message.trim().length >= 10;

  // Cálculo del progreso del formulario (7 campos clave)
  const completedFields = [
    isNameValid,
    isOrgValid,
    isEmailValid,
    isPhoneValid,
    Boolean(formData.needType),
    isMessageValid,
    formData.privacyAccepted,
  ].filter(Boolean).length;
  const progressPercentage = Math.round((completedFields / 7) * 100);

  // Preseleccionar necesidad si viene desde un botón CTA de producto o soluciones
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const sol = params.get("solucion") || params.get("interes") || params.get("servicio");
      const timer = setTimeout(() => {
        if (sol === "dentaldesk") {
          setFormData((prev) => ({ ...prev, needType: "DentalDesk (SaaS clínica dental)" }));
        } else if (sol === "lautaro" || sol === "lautaronutricion") {
          setFormData((prev) => ({ ...prev, needType: "LautaroNutrición (Sistema nutrición / salud)" }));
        } else if (sol === "pharmalyze") {
          setFormData((prev) => ({ ...prev, needType: "Pharmalyze AI (Piloto farmacias)" }));
        } else if (sol === "medida" || sol === "desarrollo") {
          setFormData((prev) => ({ ...prev, needType: "Sistema de gestión a medida" }));
        } else if (sol === "automatizacion") {
          setFormData((prev) => ({ ...prev, needType: "Automatización e integración de procesos" }));
        } else if (sol === "consultoria") {
          setFormData((prev) => ({ ...prev, needType: "Consultoría y diagnóstico operativo" }));
        } else if (sol === "implementacion") {
          setFormData((prev) => ({ ...prev, needType: "Implementación, capacitación y acompañamiento" }));
        } else if (sol === "saas" || sol === "sistemas") {
          setFormData((prev) => ({ ...prev, needType: "Sistemas de gestión y productos SaaS" }));
        }
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-white text-[#151A21] overflow-hidden">
      {/* Fondo dinámico líquido y arquitectónico WebGL */}
      <ContactBackground />

      <Navbar />

      <main className="relative z-10 flex-1 pt-32 pb-24">
        <Container>
          {/* Header de Página */}
          <div className="max-w-3xl mb-14 space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/80 text-xs font-semibold text-[#2563EB] shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              <span>Canales oficiales de NAXAD</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Hablemos de tu gestión.
            </h1>
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal max-w-2xl">
              Contanos sobre tu negocio o el producto del ecosistema que te interesa. Analizamos tu contexto para indicarte si adoptás una solución existente o construimos algo a tu medida.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Formulario Principal con Floating Labels y Micro-interacciones (7 columnas) */}
            <div className="lg:col-span-7 animate-fade-in-up delay-75">
              <Card className="relative p-6 sm:p-10 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs"
                    >
                      <CheckCircle2 size={32} />
                    </motion.div>
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
                        className="text-xs font-semibold hover:bg-slate-100 cursor-pointer"
                      >
                        Enviar otra consulta
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    {/* Progress Bar del Formulario */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Progreso del formulario
                        </span>
                        <span className="text-xs font-semibold font-mono text-[#2563EB]">
                          {progressPercentage}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${progressPercentage}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

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
                          className={`peer w-full h-12 pt-4 pb-1 pl-3.5 pr-9 text-xs sm:text-sm bg-slate-50/70 border rounded-xl focus:outline-none focus:ring-2 focus:bg-white text-[#151A21] transition-all ${
                            formData.name && isNameValid
                              ? "border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500/20"
                              : "border-slate-200 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
                          }`}
                        />
                        <label
                          htmlFor="name"
                          className="pointer-events-none absolute left-3.5 top-3.5 text-xs text-slate-500 transition-all duration-200 transform -translate-y-2 scale-90 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-2 peer-focus:text-[#2563EB] peer-focus:font-semibold"
                        >
                          Nombre y apellido *
                        </label>
                        {formData.name && isNameValid && (
                          <div className="absolute right-3 top-3.5">
                            <CheckCircle2
                              size={16}
                              className="text-emerald-500 animate-fade-in-up"
                            />
                          </div>
                        )}
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
                          className={`peer w-full h-12 pt-4 pb-1 pl-3.5 pr-9 text-xs sm:text-sm bg-slate-50/70 border rounded-xl focus:outline-none focus:ring-2 focus:bg-white text-[#151A21] transition-all ${
                            formData.organization && isOrgValid
                              ? "border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500/20"
                              : "border-slate-200 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
                          }`}
                        />
                        <label
                          htmlFor="organization"
                          className="pointer-events-none absolute left-3.5 top-3.5 text-xs text-slate-500 transition-all duration-200 transform -translate-y-2 scale-90 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-2 peer-focus:text-[#2563EB] peer-focus:font-semibold"
                        >
                          Organización o rubro *
                        </label>
                        {formData.organization && isOrgValid && (
                          <div className="absolute right-3 top-3.5">
                            <CheckCircle2
                              size={16}
                              className="text-emerald-500 animate-fade-in-up"
                            />
                          </div>
                        )}
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
                          <option value="Sistemas de gestión y productos SaaS">
                            Sistemas de gestión y productos SaaS
                          </option>
                          <option value="Sistema de gestión a medida">
                            Desarrollo de sistema de gestión a medida
                          </option>
                          <option value="Automatización e integración de procesos">
                            Automatización e integración de procesos
                          </option>
                          <option value="Consultoría y diagnóstico operativo">
                            Consultoría y diagnóstico operativo
                          </option>
                          <option value="Implementación, capacitación y acompañamiento">
                            Implementación, capacitación y acompañamiento
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
                        className={`peer w-full pt-5 pb-2 px-3.5 text-xs sm:text-sm bg-slate-50/70 border rounded-xl focus:outline-none focus:ring-2 focus:bg-white text-[#151A21] transition-all resize-none ${
                          formData.message && isMessageValid
                            ? "border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500/20"
                            : "border-slate-200 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
                        }`}
                      />
                      <label
                        htmlFor="message"
                        className="pointer-events-none absolute left-3.5 top-3.5 text-xs text-slate-500 transition-all duration-200 transform -translate-y-2 scale-90 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-2 peer-focus:text-[#2563EB] peer-focus:font-semibold"
                      >
                        ¿Qué proceso o necesidad querés resolver? *
                      </label>
                      {formData.message && (
                        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                          <span>Mínimo 10 caracteres</span>
                          <span
                            className={`font-mono ${
                              isMessageValid
                                ? "text-emerald-600 font-semibold"
                                : "text-slate-400"
                            }`}
                          >
                            {formData.message.trim().length} caracteres
                          </span>
                        </div>
                      )}
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

            {/* Columna Lateral: Cards de Contacto con Interacción Real (5 columnas) */}
            <div className="lg:col-span-5 animate-fade-in-up delay-150">
              <ContactCards />
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
