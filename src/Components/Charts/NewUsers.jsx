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

const data = [
  {
    name: "Jan",

    amt: 2400,
  },
  {
    name: "Feb",

    amt: 2210,
  },
  {
    name: "Mar",

    amt: 11290,
  },
  {
    name: "Apr",

    amt: 42000,
  },
  {
    name: "May",
    amt: 2181,
  },
  {
    name: "June",

    amt: 62500,
  },
  {
    name: "Jul",

    amt: 8100,
  },
  {
    name: "Aug",

    amt: 42400,
  },
  {
    name: "Sept",

    amt: 1200,
  },
  {
    name: "Oct",
    amt: 32400,
  },
  {
    name: "Nov",
    amt: 12400,
  },
  {
    name: "Dec",
    amt: 72400,
  },
];

const getIntroOfPage = (label) => {
  if (label === "Jan") {
    return "Most Number Of Users For Jan";
  }
  if (label === "Feb") {
    return "Most Number Of Users For Feb";
  }
  if (label === "Mar") {
    return "Most Number Of Users For Mar";
  }
  if (label === "Apr") {
    return "Most Number Of Users For Apr";
  }
  if (label === "May") {
    return "Most Number Of Users For May";
  }
  if (label === "Jun") {
    return "Most Number Of Users For Jun";
  }
  if (label === "Jul") {
    return "Most Number Of Users For Jul";
  }
  if (label === "Aug") {
    return "Most Number Of Users For Aug";
  }
  if (label === "Sept") {
    return "Most Number Of Users For Sept";
  }
  if (label === "Oct") {
    return "Most Number Of Users For Oct";
  }
  if (label === "Nov") {
    return "Most Number Of Users For Nov";
  }
  if (label === "Dec") {
    return "Most Number Of Users For Dec";
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

export default function MainUsers() {
  return (
    <ResponsiveContainer width="95%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: -10,
          right: -10,
          left: 2,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        {/* <Legend /> */}
        <Bar dataKey="amt" barSize={20} fill="#727cf5" />
      </BarChart>
    </ResponsiveContainer>
  );
}
