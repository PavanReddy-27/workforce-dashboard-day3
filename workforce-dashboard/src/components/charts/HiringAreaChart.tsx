import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", hired: 2 },
  { month: "Feb", hired: 4 },
  { month: "Mar", hired: 6 },
  { month: "Apr", hired: 8 },
];

const HiringAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area dataKey="hired" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default HiringAreaChart;