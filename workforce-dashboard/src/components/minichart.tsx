// src/components/MiniChart.tsx

import {
  LineChart, Line,
  AreaChart, Area,
  PieChart, Pie, Cell,
  ResponsiveContainer, Tooltip,
} from "recharts";

import type { ChartDataPoint, ChartType } from "../types/kpi";

interface MiniChartProps {
  type: ChartType;
  data: ChartDataPoint[];
  color?: string;
}

const DEFAULT_COLOR = "#534AB7";

const MiniChart = ({ type, data, color = DEFAULT_COLOR }: MiniChartProps) => {
  const rechartData = data.map((d) => ({ name: d.label, value: d.value }));

  if (type === "line") {
    return (
      <ResponsiveContainer width="100%" height={70}>
        <LineChart data={rechartData}>
          <Tooltip
            contentStyle={{ fontSize: 12 }}
            formatter={(v: number) => [v, ""]}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (type === "area") {
    return (
      <ResponsiveContainer width="100%" height={70}>
        <AreaChart data={rechartData}>
          <Tooltip
            contentStyle={{ fontSize: 12 }}
            formatter={(v: number) => [v, ""]}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            fill={color + "22"}
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  if (type === "pie" || type === "donut") {
    const COLORS = [color, "#1D9E75", "#BA7517", "#D85A30", "#888780"];
    return (
      <ResponsiveContainer width="100%" height={90}>
        <PieChart>
          <Tooltip
            contentStyle={{ fontSize: 12 }}
            formatter={(v: number) => [v, ""]}
          />
          <Pie
            data={rechartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={40}
            innerRadius={type === "donut" ? 22 : 0}
            strokeWidth={0}
          >
            {rechartData.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }

  return null;
};

export default MiniChart;