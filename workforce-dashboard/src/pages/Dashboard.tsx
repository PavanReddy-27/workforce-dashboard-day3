// src/pages/Dashboard.tsx

import KPICard from "../components/KPICard";
import type { KPI } from "../types/kpi";

const months = [
  { label: "Jan", value: 0 },
  { label: "Feb", value: 0 },
  { label: "Mar", value: 0 },
  { label: "Apr", value: 0 },
  { label: "May", value: 0 },
  { label: "Jun", value: 0 },
];

const kpis: KPI[] = [
  {
    title: "Employees",
    value: "1,250",
    chartType: "line",
    color: "#534AB7",
    chartData: [
      { label: "Jan", value: 1180 },
      { label: "Feb", value: 1200 },
      { label: "Mar", value: 1195 },
      { label: "Apr", value: 1210 },
      { label: "May", value: 1240 },
      { label: "Jun", value: 1250 },
    ],
  },
  {
    title: "Attrition",
    value: "12%",
    chartType: "area",
    color: "#D85A30",
    chartData: [
      { label: "Jan", value: 15 },
      { label: "Feb", value: 14 },
      { label: "Mar", value: 13 },
      { label: "Apr", value: 13 },
      { label: "May", value: 12 },
      { label: "Jun", value: 12 },
    ],
  },
  {
    title: "Hiring Rate",
    value: "8%",
    chartType: "pie",
    color: "#534AB7",
    chartData: [
      { label: "Engineering", value: 40 },
      { label: "Sales", value: 30 },
      { label: "Operations", value: 30 },
    ],
  },
  {
    title: "Skill Coverage",
    value: "91%",
    chartType: "donut",
    color: "#1D9E75",
    chartData: [
      { label: "Covered", value: 91 },
      { label: "Gap", value: 9 },
    ],
  },
];

const Dashboard = () => {
  return (
    <>
      <h1 className="dashboard-title">Workforce Analytics Dashboard</h1>
      <div className="kpi-grid">
        {kpis.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;