"use client"
import React from 'react';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components//ui/card';
import { MagicCard } from '@/components/magicui/magic-card';
import { ChartContainer } from '@/components//ui/chart';
import { Bar, BarChart, Rectangle } from 'recharts';
import { CarouselItem } from '@/components/ui/carousel';
import { IFeatureItem } from '@/components/features/feature-item-interface';

export default function FeatureCard({ title, description, value, unit, chartData }: IFeatureItem) {
  return (
    <CarouselItem className='pl-1 md:basis-1/1 lg:basis-1/2 xl:basis-1/2 2xl:basis-1/3'>
      <div className='p-1'>
        <MagicCard
          className='cursor-pointer flex-col items-center justify-center shadow-2xl drop-shadow-2xl text-4xl bg-black border-zinc-800'
          gradientColor={'#262626'}
        >
          <CardHeader className='p-4 pb-0 text-white text-base'>
            <CardTitle>{title}</CardTitle>
            <CardDescription className='font-semibold 4'>{description}</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-row items-baseline gap-4 p-4'>
            <div className='flex items-baseline gap-1 text-3xl font-bold tabular-nums leading-none text-orange-500'>
              {value}
              <span className='text-sm font-normal text-muted-foreground'>{unit}</span>
            </div>
            <ChartContainer
              config={{
                steps: {
                  label: 'Steps',
                  color: 'hsl(var(--chart-1))'
                }
              }}
              className='ml-auto w-[72px]'
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0
                }}
                data={chartData}
              >
                <Bar
                  dataKey='steps'
                  fill='var(--color-steps)'
                  radius={2}
                  fillOpacity={0.2}
                  activeIndex={6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </MagicCard>
      </div>
    </CarouselItem>
  );
}
