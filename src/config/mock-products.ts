export interface MockProduct {
  id: string;
  sku: string;
  name: string;
  presentation: string;
  batch: string;
  expiryDate: string;
  daysRemaining: number;
  stock: number;
  minStock: number;
  avgDailySales: number;
  coverageDays: number;
  supplier: string;
  status: "critical" | "warning" | "optimal";
  statusLabel: string;
  actionSuggested: string;
  requiresCooling?: boolean;
}

export const MOCK_PRODUCTS: MockProduct[] = [
  {
    id: "p1",
    sku: "MED-0849",
    name: "Insulina NPH 100 UI/ml",
    presentation: "Vial x 10 ml",
    batch: "#L-77312",
    expiryDate: "02/10/2026",
    daysRemaining: 16,
    stock: 3,
    minStock: 5,
    avgDailySales: 0.2,
    coverageDays: 15,
    supplier: "Drog. Suizo Arg.",
    status: "critical",
    statusLabel: "Riesgo Inminente",
    actionSuggested: "Priorizar salida física (FEFO)",
    requiresCooling: true,
  },
  {
    id: "p2",
    sku: "MED-1204",
    name: "Amoxicilina 500 mg",
    presentation: "Envase x 21 cápsulas",
    batch: "#L-84920",
    expiryDate: "15/11/2026",
    daysRemaining: 60,
    stock: 18,
    minStock: 12,
    avgDailySales: 2.4,
    coverageDays: 7.5,
    supplier: "Drog. Monroe",
    status: "warning",
    statusLabel: "Atención FEFO",
    actionSuggested: "Lote más antiguo · Salida prioritaria",
  },
  {
    id: "p3",
    sku: "MED-3391",
    name: "Losartán Potásico 50 mg",
    presentation: "Caja x 30 comp.",
    batch: "#L-91042",
    expiryDate: "24/03/2028",
    daysRemaining: 550,
    stock: 4,
    minStock: 10,
    avgDailySales: 1.0,
    coverageDays: 4,
    supplier: "Drog. Del Sud",
    status: "warning",
    statusLabel: "Stock Mínimo",
    actionSuggested: "Bajo mínimo (4/10) · Reponer",
  },
  {
    id: "p4",
    sku: "MED-5510",
    name: "Ibuprofeno 400 mg",
    presentation: "Blíster x 20 comp.",
    batch: "#L-99401",
    expiryDate: "18/08/2027",
    daysRemaining: 330,
    stock: 85,
    minStock: 25,
    avgDailySales: 3.2,
    coverageDays: 26.5,
    supplier: "Drog. Kellerhoff",
    status: "optimal",
    statusLabel: "Stock Saludable",
    actionSuggested: "Rotación óptima · Cobertura 26d",
  },
];
