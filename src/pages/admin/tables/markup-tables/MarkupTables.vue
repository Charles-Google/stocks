<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="somecards">
    <div class="grid grid-cols-12 gap-6">
      <div class="box col-span-12 lg:col-span-3">
        <va-card class="col-span-12 lg:col-span-3" style="margin-bottom: 4.5vw">
          <va-card-content class="h-full flex flex-col justify-center">
            <h2 class="va-h3 m-0" :style="{ color: colors.primary }">总收益率: &nbsp 97%</h2>
            <p class="no-wrap" >超越了88.26%的股民</p>
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
    </div>
  </div>

  <va-card>
    <va-card-title>您的仓库</va-card-title>
    <va-card-content class="overflow-auto">
      <table class="va-table va-table--striped va-table--hoverable w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.country }}</td>
            <td>
              <va-badge :text="user.status" :color="getStatusColor(user.status)" />
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
  import data from '../../../../data/tables/markup-table/data.json'
  import VaChart from '../../../../components/va-charts/VaChart.vue'

  import { VaCard, VaCardContent, VaCardTitle, useColors } from 'vuestic-ui'
  import { useChartData } from '../../../../data/charts/composables/useChartData'

  import { pieChartData } from '../../../../data/charts'
  const pieChartDataGenerated = useChartData(pieChartData)
  // const { t } = useI18n()
  const { colors } = useColors()
  const users = ref(data.slice(0, 8))

  function getStatusColor(status: string) {
    if (status === 'paid') {
      return 'success'
    }

    if (status === 'processing') {
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
    // height: 5vw;
    margin-top: -4.5vw;
  }
</style>
