import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Engineering", value: 8 },
  { name: "QA", value: 3 },
  { name: "HR", value: 2 },
  { name: "Finance", value: 3 },
  { name: "Support", value: 4 },
];

const DepartmentPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="value" label />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DepartmentPieChart;