'use client';
import { PieChart, Pie } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { browser: 'Nigeria', visitors: 275, fill: '#1C1C1C' },
  { browser: 'Ghana', visitors: 200, fill: '#A1E3CB' },
  { browser: 'Kenya', visitors: 287, fill: '#B1E3FF' },
  { browser: 'Benin Republic', visitors: 173, fill: '#A8C5DA' },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Nigeria',
    color: '#1C1C1C]',
  },
  safari: {
    label: 'Ghana',
    color: 'bg-[#A1E3CB]',
  },
  firefox: {
    label: 'Kenya',
    color: 'hsl(var(--chart-3))',
  },
  edge: {
    label: 'Benin Republic',
    color: 'hsl(var(--chart-4))',
  },
} satisfies ChartConfig;

export function PieGraph() {
  return (
    <ChartContainer
      config={chartConfig}
      className='mx-auto aspect-square max-h-[300px]'
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          paddingAngle={5}
          data={chartData}
          dataKey='visitors'
          nameKey='browser'
          innerRadius={40}
          strokeWidth={5}
        ></Pie>
      </PieChart>
    </ChartContainer>
  );
}
