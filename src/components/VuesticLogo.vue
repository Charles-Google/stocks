<template>
  <div class="logo"></div>
</template>

<script setup lang="ts">
  // import { computed } from 'vue'
  // import { useColors } from 'vuestic-ui'
  // const { getColor, shiftHSLAColor } = useColors()

  // const props = withDefaults(
  //   defineProps<{
  //     height?: number | string
  //     color?: string
  //   }>(),
  //   {
  //     height: 16,
  //     color: 'primary',
  //   },
  // )

  // const colorsComputed = computed(() => {
  //   const color = getColor(props.color, 'primary')
  //   return { start: color, end: shiftHSLAColor(color, { l: -20 }) }
  // })
</script>
<style lang="scss" scoped>
  .logo {
    background: no-repeat url(../../logo.png);
    background-size: cover;
    width: 3.8vw !important;
    height: 3.8vw;
    margin-bottom: -1.4vw;
    margin-top: -1.4vw;
    border-radius: 50%;
  }
</style>
