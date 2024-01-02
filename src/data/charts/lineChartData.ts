import { TLineChartData } from '../types'

const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

const getSize = (minSize = 12) => Math.max(minSize, new Date().getMonth())
const size = getSize()

const generateValue = () => Math.floor(Math.random() * 100)
const generateArray = (length: number) => Array.from(Array(length), generateValue)

const generateYLabels = () => {
  const flip = !!Math.floor(Math.random() * 2)
  return flip ? ['实时股价', '增长概率'] : ['增长概率', '实时股价']
}
const yLabels = generateYLabels()

export const lineChartData: TLineChartData = {
  labels: months.slice(0, size),
  datasets: [
    {
      label: yLabels[0],
      backgroundColor: 'primary',
      data: generateArray(size),
    },
    {
      label: yLabels[1],
      backgroundColor: 'secondary',
      data: generateArray(size),
    },
  ],
}
