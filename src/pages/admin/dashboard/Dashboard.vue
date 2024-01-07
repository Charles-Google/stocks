<template>
  <div class="dashboard">
    <dashboard-charts />
    <div class="sceondrow">
      <ChatPage class="chatblock"></ChatPage>
      <div class="twocards">
        <va-card class="cardblock" stripe stripe-color="danger">
          <va-card-title>最高收益</va-card-title>
          <va-card-content>
            <h5>收益率<span>icon</span></h5>
            <h1>23.4%</h1>
            <!-- 之后会改成动态的 -->
            <div class="stockname">鸿茅药酒</div>
            <div class="stockid">编号:234231</div>
            <div class="price">当前股价: <span>4.55</span></div>

            <va-button>查看详情</va-button>
          </va-card-content>
        </va-card>
        <va-card class="cardblock" stripe stripe-color="info">
          <va-card-title>最低风险</va-card-title>
          <va-card-content>
            <h5>增值概率<span>icon</span></h5>
            <h1>97.1%</h1>
            <!-- 之后会改成动态的 -->
            <div class="stockname">特斯拉</div>
            <div class="stockid">编号:114514</div>
            <div class="price">当前股价: <span>12.45</span></div>

            <va-button>查看详情</va-button>
          </va-card-content>
        </va-card>
      </div>
    </div>

    <!-- <dashboard-info-block /> -->

    <!-- <div class="grid grid-cols-12 gap-6">
      <dashboard-tabs class="col-span-12 lg:col-span-6" @submit="addAddressToMap" />

      <dashboard-map ref="dashboardMap" class="col-span-12 lg:col-span-6" />
    </div> -->
    <!-- <div class="flex justify-center mt-2">
      <va-button
        class="mr-2"
        size="small"
        preset="plain"
        href="https://www.iubenda.com/privacy-policy/19055770"
        title="Privacy Policy"
      >
        Privacy Policy
      </va-button>
    </div> -->
  </div>
</template>

<script setup lang="ts">
  // import { ref } from 'vue'

  import DashboardCharts from './DashboardCharts.vue'
  import ChatPage from '../ui/chat/ChatPage.vue'
  // import { useI18n } from 'vue-i18n'
  // const { t } = useI18n()
  // import DashboardInfoBlock from './DashboardInfoBlock.vue'
  // import DashboardTabs from './DashboardTabs.vue'
  // import DashboardMap from './DashboardMap.vue'

  // const dashboardMap = ref()

  // function addAddressToMap({ city, country }: { city: { text: string }; country: string }) {
  //   dashboardMap.value.addAddress({ city: city.text, country })
  // }
</script>

<style lang="scss">
  .dashboard {
    .va-card {
      margin-bottom: 0 !important;

      &__title {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .sceondrow {
    display: flex;
    margin-top: 2vw;
    height: 35vw;
    .chatblock {
      width: 81%;
    }
    .twocards {
      width: 15.5%;
      margin-left: 3%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .cardblock {
      width: 100%;
      margin-left: 3%;
      height: 48%;
      overflow: hidden;
      font-weight: bold;

      // .va-card-content{
      //   display: flex;
      // }
      h5 {
        font-size: 1.3vw;
      }
      h1 {
        font-size: 2.3vw;
        color: orangered;
      }
      .price {
        margin-bottom: 0.4vw;
      }
      .stockname {
        margin-bottom: 0.2vw;
        font-size: 1.6vw;
        background-color: skyblue;
      }
      .stockid {
        margin-bottom: 0.2vw;
      }
      .va-botton {
        margin-left: 0.8vw;
      }
    }
  }
</style>
