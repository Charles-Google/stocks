import { TBarChartData } from '../types'

export const barChartData: TBarChartData = {
  labels: ['2021年上', '2021年下', '2022年上', '2022年下', '2023年上', '2023年下'],
  datasets: [
    {
      label: '白酒',
      backgroundColor: 'primary',
      data: [50, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
    {
      label: '其他',
      backgroundColor: 'info',
      data: [50, 10, 22, 39, 15, 20, 85, 32, 60, 50, 20, 30],
    },
  ],
}
