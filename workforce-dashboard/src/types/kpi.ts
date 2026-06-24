// src/types/kpi.ts

export type ChartType = "line" | "area" | "pie" | "donut";

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface KPI {
  title: string;
  value: string | number;
  chartType: ChartType;
  chartData: ChartDataPoint[];
  color?: string;
}