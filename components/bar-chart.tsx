'use client';

import { Bar, BarChart, Cell, XAxis, YAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useCallback } from 'react';
import { formatTick } from '@/lib/utils';

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#95A4FC',
  },
  mobile: {
    label: 'Mobile',
    color: '#BAEDBD',
  },
} satisfies ChartConfig;

type Props = {
  isMonth?: boolean;
};

export function Barchart({ isMonth = false }: Props) {
  const generateChartData = useCallback(() => {
    let data: { name: string; color: string }[] = [];

    if (isMonth) {
      data = [
        { name: 'Jan', color: '#95A4FC' },
        { name: 'Feb', color: '#BAEDBD' },
        { name: 'Mar', color: '#1C1C1C' },
        { name: 'Apr', color: '#B1E3FF' },
        { name: 'May', color: '#A8C5DA' },
        { name: 'Jun', color: '#A1E3CB' },
        { name: 'Jul', color: '#95A4FC' },
        { name: 'Aug', color: '#BAEDBD' },
        { name: 'Sept', color: '#1C1C1C' },
        { name: 'Oct', color: '#B1E3FF' },
        { name: 'Nov', color: '#A8C5DA' },
        { name: 'Dec', color: '#A1E3CB' },
      ];
    } else {
      data = [
        { name: 'Linux', color: '#95A4FC' },
        { name: 'Mac', color: '#BAEDBD' },
        { name: 'IOS', color: '#1C1C1C' },
        { name: 'Windows', color: '#B1E3FF' },
        { name: 'Android', color: '#A8C5DA' },
        { name: 'Other', color: '#A1E3CB' },
      ];
    }

    return data?.map(({ name, color }) => ({
      month: name,
      value: Math.floor(Math.random() * (30000 - 1000) + 1000), // Random between 1k - 30k
      color,
    }));
  }, [isMonth]);

  const chartData = generateChartData();

  return (
    <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
      <BarChart
        accessibilityLayer
        data={chartData}
        margin={{ top: 10, bottom: 0 }}
      >
        {/* <CartesianGrid vertical={false} /> */}
        {isMonth ? (
          <XAxis
            dataKey='month'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
        ) : (
          <XAxis
            dataKey='month'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
        )}

        <YAxis
          dataKey=''
          tickLine={false}
          axisLine={false}
          //@ts-expect-error formatte error
          tickFormatter={(value) => formatTick(value)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />

        <Bar dataKey='value' width={isMonth ? 28 : 14} radius={12}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
