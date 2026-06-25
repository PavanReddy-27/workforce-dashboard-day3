import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Covered", value: 90 },
  { name: "Remaining", value: 10 },
];

const SkillDonutChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={70}
          outerRadius={100}
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SkillDonutChart;