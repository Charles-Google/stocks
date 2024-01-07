<template>
  <va-card class="chat">
    <va-card-title>智能推荐</va-card-title>
    <va-card-content>
      <chat v-model="chatMessages" />
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
  import Chat from './Chat.vue'
  // import { useI18n } from 'vue-i18n'
  import { ref } from 'vue'
  // const { t } = useI18n()

  const chatMessages = ref([
    {
      text: '您可以输入股票的名字或编码,我将为您进行分析',
      yours: false,
    },
    {
      text: '贵州茅台',
      yours: true,
    },
    {
      text: '经过我的详细计算,该股票资本回报率较高:ROIC较高,投资回报率较高。核心利润贡献度较高：核心利润贡献度较高，盈利质量较好。货币资金持有量增加：货币资金持有量增加，在手货币资金充足。值得买入.',
      yours: false,
    },
    // {
    //   text: 'Should I bring a lightbox with me?',
    //   yours: true,
    // },
    // {
    //   text: 'No, thanks. There is no need. Can we set up a meeting earlier?',
    //   yours: false,
    // },
    // {
    //   text: "I'm working on Vuestic, so let's meet at 3pm. Thanks!",
    //   yours: true,
    // },
  ])
</script>
