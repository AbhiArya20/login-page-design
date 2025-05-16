import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import FeatureCard from '@/components/features/feature-card';
import { IFeatureItem } from '@/components/features/feature-item-interface';

export default function FeatureList() {
  const features: IFeatureItem[] = [
    {
      id: 1,
      title: 'Walking Distance',
      description: 'Over the last 7 days, your distance walked and run was 12.5 miles per day.',
      value: '12.5',
      unit: 'miles/day',
      chartData: [
        { date: '2024-01-01', steps: 2000 },
        { date: '2024-01-02', steps: 2100 },
        { date: '2024-01-03', steps: 2200 },
        { date: '2024-01-04', steps: 1300 },
        { date: '2024-01-05', steps: 1400 },
        { date: '2024-01-06', steps: 2500 },
        { date: '2024-01-07', steps: 1600 }
      ]
    },
    {
      id: 2,
      title: 'Walking Distance',
      description: 'Over the last 7 days, your distance walked and run was 12.5 miles per day.',
      value: '12.5',
      unit: 'miles/day',
      chartData: [
        { date: '2024-01-01', steps: 2000 },
        { date: '2024-01-02', steps: 2100 },
        { date: '2024-01-03', steps: 2200 },
        { date: '2024-01-04', steps: 1300 },
        { date: '2024-01-05', steps: 1400 },
        { date: '2024-01-06', steps: 2500 },
        { date: '2024-01-07', steps: 1600 }
      ]
    },
    {
      id: 3,
      title: 'Walking Distance',
      description: 'Over the last 7 days, your distance walked and run was 12.5 miles per day.',
      value: '12.5',
      unit: 'miles/day',
      chartData: [
        { date: '2024-01-01', steps: 2000 },
        { date: '2024-01-02', steps: 2100 },
        { date: '2024-01-03', steps: 2200 },
        { date: '2024-01-04', steps: 1300 },
        { date: '2024-01-05', steps: 1400 },
        { date: '2024-01-06', steps: 2500 },
        { date: '2024-01-07', steps: 1600 }
      ]
    },
    {
      id: 4,
      title: 'Walking Distance',
      description: 'Over the last 7 days, your distance walked and run was 12.5 miles per day.',
      value: '12.5',
      unit: 'miles/day',
      chartData: [
        { date: '2024-01-01', steps: 2000 },
        { date: '2024-01-02', steps: 2100 },
        { date: '2024-01-03', steps: 2200 },
        { date: '2024-01-04', steps: 1300 },
        { date: '2024-01-05', steps: 1400 },
        { date: '2024-01-06', steps: 2500 },
        { date: '2024-01-07', steps: 1600 }
      ]
    },
    {
      id: 5,
      title: 'Walking Distance',
      description: 'Over the last 7 days, your distance walked and run was 12.5 miles per day.',
      value: '12.5',
      unit: 'miles/day',
      chartData: [
        { date: '01 Jun 2024', steps: 2000 },
        { date: '02 Jun 2024', steps: 2100 },
        { date: '03 Jun 2024', steps: 2200 },
        { date: '04 Jun 2024', steps: 1300 },
        { date: '05 Jun 2024', steps: 1400 },
        { date: '06 Jun 2024', steps: 2500 },
        { date: '07 Jun 2024', steps: 1600 }
      ]
    }
  ];

  return (
    <div className='flex justify-center w-full bg-black px-2 lg:px-5'>
      <Carousel className='w-9/12 lg:w-10/12 mt-10'>
        <CarouselContent className='-ml-1'>
          {features.map((feature) => (
            <FeatureCard
              id={feature.id}
              key={feature.id}
              title={feature.title}
              description={feature.description}
              value={feature.value}
              unit={feature.unit}
              chartData={feature.chartData}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
