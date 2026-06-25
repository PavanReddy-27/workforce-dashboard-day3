import KPICard from "../components/KPICard";
import EmployeeLineChart from "../components/charts/EmployeeLineChart";
import HiringAreaChart from "../components/charts/HiringAreaChart";
import DepartmentPieChart from "../components/charts/DepartmentPieChart";
import SkillDonutChart from "../components/charts/SkillDonutChart";

import { kpis } from "../data/kpis";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="page-title">
        Workforce Analytics Dashboard
      </h1>

      <div className="kpi-grid">
        {kpis.map((kpi) => (
          <KPICard
            key={kpi.title}
            title={kpi.title}
            value={kpi.value}
          />
        ))}
      </div>

      <div className="chart-grid">
        <EmployeeLineChart />
        <HiringAreaChart />
        <DepartmentPieChart />
        <SkillDonutChart />
      </div>
    </div>
  );
};

export default Dashboard;