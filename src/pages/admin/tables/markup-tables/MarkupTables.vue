<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="somecards">
    <div class="grid grid-cols-12 gap-6">
      <div class="box col-span-12 lg:col-span-3">
        <va-card class="col-span-12 lg:col-span-3" style="margin-bottom: 1.5vw">
          <va-card-content class="h-full flex flex-col justify-center">
            <h2 class="va-h3 m-0" :style="{ color: colors.primary }">总收益率: &nbsp 97%</h2>
            <p class="no-wrap">超越了88.26%的股民</p>
          </va-card-content>
        </va-card>
        <va-card class="col-span-12 lg:col-span-3">
          <va-card-content>
            <h2 class="va-h3 m-0" :style="{ color: colors.primary }">总收益: &nbsp $114514</h2>
            <p class="no-wrap">超越了59.26%的股民</p></va-card-content
          >
        </va-card>
      </div>

      <va-card v-if="pieChartDataGenerated" class="chart-widget lg:col-span-3 md:col-span-6 col-span-12">
        <va-card-title>股票总览</va-card-title>
        <va-card-content>
          <va-chart class="pie" :data="pieChartDataGenerated" type="pie" />
        </va-card-content>
      </va-card>
      <va-card v-if="doughnutChartDataGenerated" class="chart-widget lg:col-span-3 md:col-span-6 col-span-12">
        <va-card-title>投资分布</va-card-title>
        <va-card-content>
          <va-chart style="margin-top: 0.5vw" :data="doughnutChartDataGenerated" type="doughnut" />
        </va-card-content>
      </va-card>
      <va-card class="col-span-12 sm:col-span-6 lg:col-span-3">
        <va-card-title>
          <va-icon class="mr-4" name="cogs" />
          AI智能评价
        </va-card-title>
        <va-card-content class="text">
          您的投资状态良好,收益稳定,优化空间较少,请继续保持,我会持续为您提供投资建议
        </va-card-content>
      </va-card>
    </div>
  </div>

  <va-card>
    <va-card-title>您的仓库</va-card-title>
    <va-card-content class="overflow-auto">
      <table class="va-table va-table--striped va-table--hoverable w-full">
        <thead>
          <tr>
            <th>&nbsp 股票名称</th>
            <th>当前股价</th>
            <th>预期状态</th>
            <th>&nbsp&nbsp&nbsp&nbsp&nbsp 查看详情</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>

            <td>
              <va-badge style="margin-top: 0.7vw" :text="user.status" :color="getStatusColor(user.status)" />
            </td>
            <td>
              <!-- icon-right="expand_more" -->
              <va-button to="details">查看详情</va-button>
            </td>
          </tr>
        </tbody>
      </table>
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  // import { useI18n } from 'vue-i18n'
  import data from '../../dashboard/data.json'
  import VaChart from '../../../../components/va-charts/VaChart.vue'

  import { VaCard, VaCardContent, VaCardTitle, useColors } from 'vuestic-ui'
  import { useChartData } from '../../../../data/charts/composables/useChartData'

  import { pieChartData, doughnutChartData } from '../../../../data/charts'
  const pieChartDataGenerated = useChartData(pieChartData)
  const doughnutChartDataGenerated = useChartData(doughnutChartData)
  // const { t } = useI18n()
  const { colors } = useColors()
  const users = ref(data.slice(0, 8))

  function getStatusColor(status: string) {
    if (status === '下跌') {
      return 'success'
    }

    if (status === '平稳') {
      return 'info'
    }

    return 'danger'
  }
</script>
<style lang="scss" scoped>
  .box {
    display: flex;
    flex-direction: column;
  }
  .pie {
    margin-top: 0.5vw;
  }
  .text {
    font-size: 1.4vw;
  }
  .somecards {
    margin-bottom: 2vw;
  }
</style>
