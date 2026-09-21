"use client";

import React, { useState } from "react";
import { MOCK_PRODUCTS } from "@/config/mock-products";
import { cn } from "@/lib/utils";
import {
  Clock,
  TrendingUp,
  ShoppingCart,
  AlertTriangle,
  CheckCircle2,
  Filter,
} from "lucide-react";

type ActiveTab = "fefo" | "coverage" | "reorder";
type FilterMode = "all" | "critical" | "warning";

export function PharmacyWindow() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("fefo");
  const [filterMode, setFilterMode] = useState<FilterMode>("all");

  const filteredProducts = MOCK_PRODUCTS.filter((p) => {
    if (filterMode === "critical") return p.status === "critical";
    if (filterMode === "warning")
      return p.status === "warning" || p.status === "critical";
    return true;
  });

  return (
    <div className="w-full rounded-xl bg-[#0B0F17] border border-[#1F2937] text-[#F8FAFC] shadow-2xl overflow-hidden product-glow transition-all duration-200">
      {/* Window Header */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-[#1F2937] bg-[#0E131F]/90 gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
          </div>
          <span className="text-xs font-mono font-medium text-[#94A3B8] tracking-tight">
            NAXAD Pharmacy OS · Sucursal Central
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-[#10B981]/10 text-[#34D399] border border-[#10B981]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            Sincronizado hace 2m
          </span>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center border-b border-[#1F2937] px-4 bg-[#0B0F17] overflow-x-auto text-xs font-medium">
        <button
          onClick={() => setActiveTab("fefo")}
          className={cn(
            "flex items-center gap-1.5 py-2.5 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer",
            activeTab === "fefo"
              ? "border-[#2563EB] text-white font-semibold"
              : "border-transparent text-[#94A3B8] hover:text-[#E2E8F0]"
          )}
        >
          <Clock size={13} className="text-[#3B82F6]" />
          Monitor FEFO & Vencimientos
        </button>

        <button
          onClick={() => setActiveTab("coverage")}
          className={cn(
            "flex items-center gap-1.5 py-2.5 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer",
            activeTab === "coverage"
              ? "border-[#2563EB] text-white font-semibold"
              : "border-transparent text-[#94A3B8] hover:text-[#E2E8F0]"
          )}
        >
          <TrendingUp size={13} className="text-[#10B981]" />
          Cobertura de Stock
        </button>

        <button
          onClick={() => setActiveTab("reorder")}
          className={cn(
            "flex items-center gap-1.5 py-2.5 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer",
            activeTab === "reorder"
              ? "border-[#2563EB] text-white font-semibold"
              : "border-transparent text-[#94A3B8] hover:text-[#E2E8F0]"
          )}
        >
          <ShoppingCart size={13} className="text-[#F59E0B]" />
          Reposición Guiada
        </button>
      </div>

      {/* Quick Filters Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-[#0E131F]/50 border-b border-[#1F2937] gap-2 text-xs">
        <div className="flex items-center gap-2">
          <Filter size={12} className="text-[#64748B]" />
          <span className="text-[#64748B] text-[11px] uppercase tracking-wider font-mono">
            Filtrar:
          </span>
          <button
            onClick={() => setFilterMode("all")}
            className={cn(
              "px-2 py-0.5 rounded text-[11px] font-mono transition-colors",
              filterMode === "all"
                ? "bg-[#1E293B] text-white"
                : "text-[#94A3B8] hover:text-white"
            )}
          >
            Todos ({MOCK_PRODUCTS.length})
          </button>
          <button
            onClick={() => setFilterMode("critical")}
            className={cn(
              "px-2 py-0.5 rounded text-[11px] font-mono transition-colors",
              filterMode === "critical"
                ? "bg-[#EF4444]/20 text-[#FCA5A5] border border-[#EF4444]/40"
                : "text-[#EF4444] hover:bg-[#EF4444]/10"
            )}
          >
            Críticos &lt; 30d (1)
          </button>
          <button
            onClick={() => setFilterMode("warning")}
            className={cn(
              "px-2 py-0.5 rounded text-[11px] font-mono transition-colors",
              filterMode === "warning"
                ? "bg-[#F59E0B]/20 text-[#FCD34D] border border-[#F59E0B]/40"
                : "text-[#F59E0B] hover:bg-[#F59E0B]/10"
            )}
          >
            Atención (2)
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-[#64748B]">
          <span>Orden: FEFO estricto</span>
          <span>·</span>
          <span>4 SKUs en muestra</span>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-[#1F2937] text-[11px] uppercase tracking-wider font-mono text-[#64748B] bg-[#0E131F]/30">
              <th className="py-2.5 px-4 font-normal">SKU / Medicamento</th>
              <th className="py-2.5 px-4 font-normal">Lote / Droguería</th>
              <th className="py-2.5 px-4 font-normal font-tabular text-right">
                {activeTab === "fefo" && "Caducidad (Días)"}
                {activeTab === "coverage" && "Venta Diaria"}
                {activeTab === "reorder" && "Stock / Mínimo"}
              </th>
              <th className="py-2.5 px-4 font-normal font-tabular text-right">
                {activeTab === "fefo" && "Existencia"}
                {activeTab === "coverage" && "Cobertura Estimada"}
                {activeTab === "reorder" && "Sugerencia Compra"}
              </th>
              <th className="py-2.5 px-4 font-normal">Estado Operativo & Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1F2937]/70 font-tabular">
            {filteredProducts.map((p) => (
              <tr
                key={p.id}
                className="hover:bg-[#111827] transition-colors group"
              >
                {/* Product Column */}
                <td className="py-3 px-4">
                  <div className="font-sans font-medium text-white group-hover:text-[#60A5FA] transition-colors flex items-center gap-1.5">
                    {p.name}
                    {p.requiresCooling && (
                      <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                        Frío
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-[#94A3B8] font-mono">
                    {p.sku} · {p.presentation}
                  </div>
                </td>

                {/* Batch / Supplier Column */}
                <td className="py-3 px-4">
                  <div className="font-mono text-white text-[11px] font-semibold tracking-tight">
                    {p.batch}
                  </div>
                  <div className="text-[11px] text-[#94A3B8] font-sans">
                    {p.supplier}
                  </div>
                </td>

                {/* Context Column (Dynamic per Tab) */}
                <td className="py-3 px-4 text-right">
                  {activeTab === "fefo" && (
                    <>
                      <div
                        className={cn(
                          "font-mono font-medium",
                          p.daysRemaining < 30
                            ? "text-[#F87171]"
                            : p.daysRemaining < 90
                            ? "text-[#FBBF24]"
                            : "text-[#34D399]"
                        )}
                      >
                        {p.expiryDate}
                      </div>
                      <div className="text-[10px] text-[#94A3B8]">
                        En {p.daysRemaining} días
                      </div>
                    </>
                  )}
                  {activeTab === "coverage" && (
                    <>
                      <div className="font-mono font-medium text-white">
                        {p.avgDailySales} c/día
                      </div>
                      <div className="text-[10px] text-[#94A3B8]">
                        Promedio 30d
                      </div>
                    </>
                  )}
                  {activeTab === "reorder" && (
                    <>
                      <div className="font-mono font-medium text-white">
                        {p.stock} / {p.minStock} u.
                      </div>
                      <div
                        className={cn(
                          "text-[10px]",
                          p.stock <= p.minStock
                            ? "text-[#F87171]"
                            : "text-[#34D399]"
                        )}
                      >
                        {p.stock <= p.minStock
                          ? "Bajo umbral mínimo"
                          : "Por encima de mínimo"}
                      </div>
                    </>
                  )}
                </td>

                {/* Value Column (Dynamic per Tab) */}
                <td className="py-3 px-4 text-right">
                  {activeTab === "fefo" && (
                    <div className="font-mono font-semibold text-white">
                      {p.stock} u.
                    </div>
                  )}
                  {activeTab === "coverage" && (
                    <>
                      <div
                        className={cn(
                          "font-mono font-semibold",
                          p.coverageDays < 10
                            ? "text-[#F87171]"
                            : p.coverageDays < 20
                            ? "text-[#FBBF24]"
                            : "text-[#34D399]"
                        )}
                      >
                        {p.coverageDays} días
                      </div>
                      <div className="text-[10px] text-[#94A3B8]">
                        Stock proyectado
                      </div>
                    </>
                  )}
                  {activeTab === "reorder" && (
                    <div className="font-mono font-semibold text-white">
                      {p.stock <= p.minStock ? (
                        <span className="text-[#FBBF24]">
                          +{p.minStock * 2 - p.stock} u. sugeridas
                        </span>
                      ) : (
                        <span className="text-[#64748B]">0 u. requeridas</span>
                      )}
                    </div>
                  )}
                </td>

                {/* Action Column */}
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    {p.status === "critical" && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#FCA5A5] bg-[#EF4444]/15 px-2 py-0.5 rounded border border-[#EF4444]/30">
                        <AlertTriangle size={11} />
                        {p.statusLabel}
                      </span>
                    )}
                    {p.status === "warning" && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#FCD34D] bg-[#F59E0B]/15 px-2 py-0.5 rounded border border-[#F59E0B]/30">
                        <AlertTriangle size={11} />
                        {p.statusLabel}
                      </span>
                    )}
                    {p.status === "optimal" && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#6EE7B7] bg-[#10B981]/15 px-2 py-0.5 rounded border border-[#10B981]/30">
                        <CheckCircle2 size={11} />
                        {p.statusLabel}
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-[#94A3B8] font-sans mt-0.5">
                    {p.actionSuggested}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Banner of Component */}
      <div className="px-4 py-2.5 bg-[#0A0D14] border-t border-[#1F2937] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#64748B] font-mono gap-2">
        <div>
          <span>Regla activa: </span>
          <span className="text-[#94A3B8]">
            {activeTab === "fefo" && "Prioridad de salida por fecha de caducidad ascendente (FEFO)"}
            {activeTab === "coverage" && "Días de cobertura = Stock actual / Venta diaria promedio reciente"}
            {activeTab === "reorder" && "Alerta de reorden cuando Stock Actual <= Stock Mínimo"}
          </span>
        </div>
        <div className="text-[10px] text-[#64748B] italic">
          * Datos simulados para validación de interfaz técnica
        </div>
      </div>
    </div>
  );
}
