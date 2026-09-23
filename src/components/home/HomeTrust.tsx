import React from "react";
import { StatsCommandCenter } from "./StatsCommandCenter";

export function HomeTrust() {
  return (
    <section className="bg-white border-b border-slate-200 overflow-hidden">
      {/* Bento Grid con Contadores Animados y Métricas Reales */}
      <StatsCommandCenter />
    </section>
  );
}

export default HomeTrust;
