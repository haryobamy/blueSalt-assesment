'use client';

import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { formatTick } from '@/lib/utils';

const chartData = [
  { month: 'January', desktop: 9300, mobile: 80 },
  { month: 'February', desktop: 4600, mobile: 9760 },
  { month: 'March', desktop: 12500, mobile: 12000 },
  { month: 'April', desktop: 22140, mobile: 19320 },
  { month: 'May', desktop: 24309, mobile: 16800 },
  { month: 'June', desktop: 22790, mobile: 16540 },
  { month: 'July', desktop: 21400, mobile: 14000 },
  { month: 'Aug', desktop: 21094, mobile: 10340 },
  { month: 'Sept', desktop: 21044, mobile: 14040 },
  { month: 'Oct', desktop: 21784, mobile: 140 },
  { month: 'Nov', desktop: 21834, mobile: 24140 },
  { month: 'Dec', desktop: 19650, mobile: 28960 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig;

//accessibilityLayer

export function LineGraph() {
  return (
    <ChartContainer config={chartConfig} className='min-h-[100px] w-full'>
      <LineChart data={chartData} margin={{ top: 5, bottom: 5 }}>
        {/* <CartesianGrid vertical={false} /> */}
        <XAxis
          dataKey='month'
          tickLine={false}
          //   tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          dataKey=''
          tickLine={false}
          axisLine={false}
          //@ts-ignore
          tickFormatter={(value) => formatTick(value)}
        />

        <Tooltip />

        <Line type='monotone' dataKey='desktop' stroke='#8884d8' dot={false} />
        <Line type='natural' dataKey='mobile' stroke='#82ca9d' dot={false} />
      </LineChart>
    </ChartContainer>
  );
}
