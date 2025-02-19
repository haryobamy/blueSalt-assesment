import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  data: {
    label: string;
    value: string;
    percentage: number;
    bg: string;
  };
};

export default function DashboardCard({ data }: Props) {
  return (
    <div
      className={cn(`rounded-2xl p-6 min-w-[200px] bg-[#E5ECF6]  `, data.bg)}
    >
      <p className='text-[#1C1C1C] text-xs font-[400] '>{data?.label}</p>
      <div className='flex items-center justify-between mt-2'>
        <h2 className='text-2xl font-semibold text-black dark:text-white'>
          {data?.value}
        </h2>
        <span className='text-xs text-[#1C1C1C]'>{data?.percentage}% </span>
      </div>
    </div>
  );
}
