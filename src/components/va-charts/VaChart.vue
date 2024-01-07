<template>
  <component :is="chartComponent" ref="chart" class="va-chart" :chart-options="chartOptions" :chart-data="data" />
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import type { TChartOptions } from 'vue-chartjs/dist/types'
  import { defaultConfig, chartTypesMap } from './vaChartConfigs'
  // import { TChartData } from '../../data/types'

  const props = defineProps<{
    data: any
    options?: TChartOptions<'line' | 'bar' | 'bubble' | 'doughnut' | 'pie'>
    type: keyof typeof chartTypesMap
  }>()

  const chart = ref()

  const chartComponent = computed(() => chartTypesMap[props.type])

  const chartOptions: any = computed(() => ({
    ...defaultConfig,
    // ...props.options,
  }))
</script>

<style lang="scss">
  .va-chart {
    width: 100%;
    height: 120%;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      height: 100%;
      width: 100%;
    }

    canvas {
      width: 100%;
      height: auto;
      min-height: 100px;
    }
  }
</style>
