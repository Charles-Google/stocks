import { TDoughnutChartData } from '../types'

export const doughnutChartData: TDoughnutChartData = {
  labels: ['基础工业', '科技创新', '传统行业', '资本控股'],
  datasets: [
    {
      label: 'Population (millions)',
      backgroundColor: ['danger', 'info', 'primary', 'warning'],
      data: [2478, 5267, 734, 234],
    },
  ],
}
