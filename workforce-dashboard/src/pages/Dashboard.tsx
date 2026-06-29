import KPICard from "../components/KPICard";
import EmployeeLineChart from "../components/charts/EmployeeLineChart";
import HiringAreaChart from "../components/charts/HiringAreaChart";
import DepartmentPieChart from "../components/charts/DepartmentPieChart";
import SkillDonutChart from "../components/charts/SkillDonutChart";

import { employees } from "../data/employees";
import useKPICalculator from "../hooks/useKPICalculator";

const Dashboard = () => {
  const {
    totalEmployees,
    attritionRate,
    hiringRate,
    skillCoverage,
  } = useKPICalculator(employees);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Workforce Analytics Dashboard</h1>

      {/* KPI Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
          gap: "20px",
          margin: "20px 0",
        }}
      >
        <KPICard
          title="Total Employees"
          value={totalEmployees}
        />

        <KPICard
          title="Attrition Rate"
          value={attritionRate}
        />

        <KPICard
          title="Hiring Rate"
          value={hiringRate}
        />

        <KPICard
          title="Skill Coverage"
          value={skillCoverage}
        />
      </div>

      {/* Charts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
          gap: "20px",
        }}
      >
        <EmployeeLineChart />

        <HiringAreaChart />

        <DepartmentPieChart />

        <SkillDonutChart />
      </div>
    </div>
  );
};

export default Dashboard;