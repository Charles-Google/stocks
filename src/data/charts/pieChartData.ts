import { TLineChartData } from '../types'

export const pieChartData: TLineChartData = {
  labels: ['下跌', '上涨', '平稳'],
  datasets: [
    {
      label: 'Population (millions)',
      backgroundColor: ['primary', 'warning', 'danger'],
      data: [8, 45, 7],
    },
  ],
}
