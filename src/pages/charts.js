import React from "react"
import {
  BarChart,
  Bar,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  Line,
  LineChart,
  PieChart,
  Pie,
} from "recharts"

import styled from "@emotion/styled"

const GraphContainer = styled.div`
  font-family: "IBM Plex Sans Condensed", sans-serif;
  font-size: 14px;
  line-height: 20px;
  padding: 16px;
  .recharts-default-tooltip {
    opacity: 0.9;
    margin: 8px;
  }
  p.recharts-tooltip-label {
    color: #59606f;
    margin-bottom: 8px !important;
    border-bottom: 1px solid #dfe4ee;
    padding: 4px 0;
  }
`

const brandGray = {
  gray01: "rgb(246 247 250)",
  gray02: "rgb(236 239 245)",
  gray03: "rgb(223 228 238)",
  gray04: "rgb(202 210 225)",
  gray05: "rgb(178 187 206)",
  gray06: "rgb(149 158 177)",
  gray07: "rgb(114 123 140)",
  gray08: "rgb(89 96 111)",
  gray09: "rgb(66 72 84)",
  gray10: "rgb(48 53 62)",
}

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const data2 = [
  {
    name: "Page A",
    uv: 2000,
    pv: 3400,
    amt: 4400,
  },
  {
    name: "Page B",
    uv: 1000,
    pv: 1498,
    amt: 9210,
  },
  {
    name: "Page C",
    uv: 3000,
    pv: 9400,
    amt: 1290,
  },
  {
    name: "Page D",
    uv: 2380,
    pv: 3208,
    amt: 1000,
  },
  {
    name: "Page E",
    uv: 1190,
    pv: 4100,
    amt: 1181,
  },
  {
    name: "Page F",
    uv: 2290,
    pv: 1800,
    amt: 2300,
  },
  {
    name: "Page G",
    uv: 3090,
    pv: 1300,
    amt: 1100,
  },
]

const SecondPage = () => (
  <article>
    <section>
      <a
        href="https://recharts.org/en-US/api"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://recharts.org/en-US/api
      </a>
    </section>

    <hr />
    <GraphContainer>
      <LineChart width={730} height={350} data={data}>
        <CartesianGrid stroke={brandGray.gray03} strokeDasharray="2 2" />
        <XAxis
          dataKey="name"
          tick={{ fill: brandGray.gray08 }}
          stroke={brandGray.gray08}
        />
        <YAxis stroke={brandGray.gray05} axisLine="false" />
        <Tooltip
          cursor={{ fill: brandGray.gray02 }}
          labelStyle={{
            color: brandGray.gray08,
          }}
          contentStyle={{
            background: "#fff",
            border: "1px solid rgb(236 239 245)",
            boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.15)",
          }}
          wrapperStyle={{
            width: 160,
            color: brandGray.gray08,
          }}
        />

        <Legend />

        <Line type="monotone" dataKey="pv" stroke="#5C7CFA" />
        <Line type="monotone" dataKey="uv" stroke="#22B8CF" />
      </LineChart>
    </GraphContainer>
    <hr />
    <GraphContainer>
      <BarChart width={730} height={350} data={data}>
        <CartesianGrid
          stroke={brandGray.gray03}
          strokeDasharray="2 2"
          vertical={false}
        />

        <YAxis stroke={brandGray.gray05} />
        <XAxis dataKey="name" stroke={brandGray.gray08} />

        <Tooltip
          cursor={{ fill: brandGray.gray02 }}
          wrapperStyle={{
            width: 160,
            color: brandGray.gray08,
          }}
          contentStyle={{
            background: "#fff",
            border: "1px solid rgb(236 239 245)",
            boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.15)",
          }}
        />

        <Legend />
        <Bar dataKey="pv" fill="#5C7CFA" />
        <Bar dataKey="uv" fill="#364FC7" barSize={3} />
      </BarChart>
    </GraphContainer>
    <hr />
    <GraphContainer>
      <PieChart width={730} height={550}>
        <Pie
          data={data2}
          dataKey="pv"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#5C7CFA"
          paddingAngle={3}
          labelLine={{ stroke: brandGray.gray04 }}
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            value,
            index,
          }) => {
            const RADIAN = Math.PI / 180
            const radius = 32 + innerRadius + (outerRadius - innerRadius)
            const x = cx + radius * Math.cos(-midAngle * RADIAN)
            const y = cy + radius * Math.sin(-midAngle * RADIAN)

            return (
              <text
                x={x}
                y={y}
                fill={brandGray.gray08}
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {data[index].name} ({value})
              </text>
            )
          }}
        />
        />
      </PieChart>
    </GraphContainer>
  </article>
)

export default SecondPage
