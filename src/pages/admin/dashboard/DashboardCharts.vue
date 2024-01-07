<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="grid grid-cols-12 gap-6">
    <va-card v-if="lineChartDataGenerated" class="col-span-12 lg:col-span-9">
      <va-card-title>
        <h1>今日推荐</h1>
        <h1 style="font-size: 1.5vw">贵州茅台(600519)&nbsp<va-button to="details">点击查看</va-button></h1>

        <div>
          <va-button
            class="m-1"
            size="small"
            color="danger"
            :disabled="datasetIndex === minIndex"
            @click="setDatasetIndex(datasetIndex - 1)"
          >
            显示更多
          </va-button>
          <va-button
            class="m-1"
            size="small"
            color="danger"
            :disabled="datasetIndex === maxIndex - 1"
            @click="setDatasetIndex(datasetIndex + 1)"
          >
            简略信息
          </va-button>
        </div>
      </va-card-title>
      <va-card-content>
        <va-chart class="chart" :data="lineChartDataGenerated" type="line" />
      </va-card-content>
    </va-card>

    <!-- <va-card class="col-span-12 sm:col-span-6 lg:col-span-3">
      <va-card-title>
        <h1>{{ t('dashboard.charts.loadingSpeed') }}</h1>
        <va-button icon="print" plain @click="printChart" />
      </va-card-title>
      <va-card-content v-if="doughnutChartDataGenerated">
        <va-chart ref="doughnutChart" class="chart chart--donut" :data="doughnutChartDataGenerated" type="doughnut" />
      </va-card-content>
    </va-card> -->

    <dashboard-contributors-chart class="col-span-12 sm:col-span-6 lg:col-span-3" />
  </div>
</template>

<script setup lang="ts">
  // import { ref } from 'vue'
  // import { useI18n } from 'vue-i18n'

  import { lineChartData } from '../../../data/charts'
  import { useChartData } from '../../../data/charts/composables/useChartData'
  import { usePartOfChartData } from './composables/usePartOfChartData'
  import VaChart from '../../../components/va-charts/VaChart.vue'
  import DashboardContributorsChart from './DashboardContributorsList.vue'

  // const { t } = useI18n()

  // const doughnutChart = ref()

  const dataGenerated = useChartData(lineChartData, 0.7)
  // const doughnutChartDataGenerated = useChartData(doughnutChartData)

  const {
    dataComputed: lineChartDataGenerated,
    minIndex,
    maxIndex,
    datasetIndex,
    setDatasetIndex,
  } = usePartOfChartData(dataGenerated)

  // function printChart() {
  //   const windowObjectReference = window.open('', 'Print', 'height=600,width=800') as Window

  //   const img = windowObjectReference.document.createElement('img')

  //   img.src = `${(document.querySelector('.chart--donut canvas') as HTMLCanvasElement | undefined)?.toDataURL(
  //     'image/png',
  //   )}`

  //   img.onload = () => {
  //     windowObjectReference?.document.body.appendChild(img)
  //   }

  //   windowObjectReference.print()

  //   windowObjectReference.onafterprint = () => {
  //     windowObjectReference?.close()
  //   }
  // }
</script>

<style scoped>
  .chart {
    height: 400px;
  }
</style>
