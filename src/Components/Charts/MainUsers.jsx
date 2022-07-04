import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const getIntroOfPage = (label) => {
  if (label === "Jan") {
    return "Most Number Of Users For January";
  }
  if (label === "Feb") {
    return "Most Number Of Users For Febuary";
  }
  if (label === "Mar") {
    return "Most Number Of Users For March";
  }
  if (label === "Apr") {
    return "Most Number Of Users For April";
  }
  if (label === "May") {
    return "Most Number Of Users For May";
  }
  if (label === "Jun") {
    return "Most Number Of Users For June";
  }
  if (label === "Jul") {
    return "Most Number Of Users For July";
  }
  if (label === "Aug") {
    return "Most Number Of Users For August";
  }
  if (label === "Sept") {
    return "Most Number Of Users For September";
  }
  if (label === "Oct") {
    return "Most Number Of Users For October";
  }
  if (label === "Nov") {
    return "Most Number Of Users For November";
  }
  if (label === "Dec") {
    return "Most Number Of Users For December";
  }
  return "";
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          color: "white",
          padding: "5px",
          width: "10rem ",
        }}
        className="custom-tooltip"
      >
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
      </div>
    );
  }

  return null;
};

export default function MainUsers({ dataMain }) {
  return (
    <ResponsiveContainer width="95%" height={300}>
      <BarChart
        data={dataMain}
        margin={{
          top: -10,
          right: -10,
          left: -5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        {/* <Legend /> */}
        <Bar dataKey="amt" barSize={15} fill="#727cf5" />
      </BarChart>
    </ResponsiveContainer>
  );
}
