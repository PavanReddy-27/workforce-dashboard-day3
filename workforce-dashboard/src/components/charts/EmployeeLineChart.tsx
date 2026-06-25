import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", employees: 10 },
  { month: "Feb", employees: 12 },
  { month: "Mar", employees: 15 },
  { month: "Apr", employees: 20 },
];

const EmployeeLineChart = () => {
  return (
    <div className="chart-card">
      <h3>Employee Growth</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line dataKey="employees" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmployeeLineChart;