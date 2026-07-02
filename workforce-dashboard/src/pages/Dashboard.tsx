import KPICard from "../components/KPICard";
import EmployeeLineChart from "../components/charts/EmployeeLineChart";
import HiringAreaChart from "../components/charts/HiringAreaChart";
import DepartmentPieChart from "../components/charts/DepartmentPieChart";
import SkillDonutChart from "../components/charts/SkillDonutChart";

import { useEmployees } from "../hooks/useEmployees";
import { useKPIs } from "../hooks/useKPIs";

const Dashboard = () => {
  const { data: employees = [], isLoading: employeesLoading, isError: employeesError } = useEmployees();
  const { data: kpis = [], isLoading: kpisLoading, isError: kpisError } = useKPIs();

  if (employeesLoading || kpisLoading) return <h2>Loading...</h2>;
  if (employeesError || kpisError) return <h2>Error loading dashboard data.</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Workforce Analytics Dashboard</h1>

      {/* KPI Cards - now driven by useKPIs() */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
          gap: "20px",
          margin: "20px 0",
        }}
      >
        {kpis.map((kpi) => (
          <KPICard key={kpi.title} title={kpi.title} value={kpi.value} />
        ))}
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