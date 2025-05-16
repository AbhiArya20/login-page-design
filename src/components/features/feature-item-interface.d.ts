export interface IFeatureItem {
  id: number;
  title: string;
  description: string;
  value: string;
  unit: string;
  chartData: {
    date: string;
    steps: number;
  }[];
}
