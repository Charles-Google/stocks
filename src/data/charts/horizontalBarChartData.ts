import { TBarChartData } from '../types'

export const horizontalBarChartData: TBarChartData = {
  labels: ['2021年上', '2021年下', '2022年上', '2022年下', '2023年上', '2023年下'],
  datasets: [
    {
      label: '国内',
      backgroundColor: 'primary',
      data: [80, 90, 50, 70, 60, 90, 50, 90, 80, 40, 72, 93],
    },
    {
      label: '国外',
      backgroundColor: 'danger',
      data: [20, 30, 20, 40, 50, 40, 15, 60, 30, 20, 42, 53],
    },
  ],
}
