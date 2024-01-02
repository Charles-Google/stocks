<template>
  <div class="dashboard">
    <dashboard-charts />
    <div class="sceondrow">
      <ChatPage class="chatblock"></ChatPage>
      <va-card class="col-span-12 sm:col-span-6 md:col-span-3" stripe stripe-color="info">
        <va-card-title>{{ t('cards.title.withStripe') }}</va-card-title>
        <va-card-content>{{ t('cards.contentTextLong') }}</va-card-content>
      </va-card>
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
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
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
    .chatblock {
      margin-top: 2vw;
      width: 85%;
    }
  }
  .sceondrow {
    display: flex;
  }
</style>
