// src/components/KPICard.tsx

import MiniChart from "./MiniChart";
import type { KPI } from "../types/kpi";

const KPICard = ({ title, value, chartType, chartData, color }: KPI) => {
  return (
    <div className="kpi-card">
      <p>{title}</p>
      <h2>{value}</h2>
      <MiniChart type={chartType} data={chartData} color={color} />
    </div>
  );
};

export default KPICard;