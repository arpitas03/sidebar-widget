import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const RampChart = (props) => {
  const Colors = ["#71D8D1", "#25B4A9", "#71d8d1", "#92e3dd", "#f1f8ff"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#25B4A9"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontFamily="Roboto"
        fontSize={12}
        fontWeight={600}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <PieChart width={400} height={250}>
      <Pie
        data={props.data}
        dataKey={props.dataKey}
        cx={120}
        cy={100}
        innerRadius={50}
        outerRadius={70}
        label={renderCustomizedLabel}
        labelLine={false}
        stroke='none'
        isAnimationActive={false}
      >
        {props.data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={Colors[index % Colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default RampChart;
