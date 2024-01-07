<template>
  <div class="charts">
    <va-button icon="md_close" style="margin-bottom: 1vw" @click="goBack" />

    <div class="grid grid-cols-12 gap-6">
      <va-card class="col-span-12 sm:col-span-6 md:col-span-4 card" stripe stripe-color="danger">
        <va-card-title>基础信息</va-card-title>
        <va-card-content>
          <h1>
            贵州茅台 &nbsp;600519
            <svg
              t="1704629390727"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1502"
              width="66"
              height="66"
            >
              <path d="M512 85.333333l249.6 298.666667H262.4z" fill="#d81e06" p-id="1503"></path>
              <path d="M426.666667 320h170.666666v576h-170.666666z" fill="#d81e06" p-id="1504"></path>
            </svg>
          </h1>

          <div class="price">1663.36</div>
          <h3>+100.34 &nbsp;+6.33%</h3>
          <div class="interact">
            <va-badge style="margin-top: 1.2vw; margin-left: 1vw" text="深主板" color="skyblue" />
            <va-button style="margin-top: 0.1vw">+自选</va-button>
          </div>
        </va-card-content>
      </va-card>
      <va-card v-if="pieChartDataGenerated" class="card lg:col-span-4 md:col-span-6 col-span-12">
        <va-card-title>涨跌概率</va-card-title>
        <va-card-content>
          <va-chart
            class="chart"
            style="margin-top: -1.5vw; margin-left: 3vw; height: 70%; width: 70%"
            :data="pieChartDataGenerated"
            type="pie"
          />
        </va-card-content>
      </va-card>
      <va-card class="col-span-12 sm:col-span-6 lg:col-span-4">
        <va-card-title>
          <va-icon class="mr-4" name="settings" />
          AI智能点评
        </va-card-title>
        <va-card-content class="text">
          次日上涨概率较高, 近期消息面活跃,主力资金无明显迹象,短期呈现震荡趋势,市场关注意愿一般。
        </va-card-content>
      </va-card>
      <va-card v-if="lineChartDataGenerated" class="card col-span-12" style="height: 34vw">
        <va-card-title>总体数据</va-card-title>
        <va-card-content>
          <va-chart class="chart" :data="lineChartDataGenerated" type="line" />
        </va-card-content>
      </va-card>
      <va-card v-if="barChartDataGenerated" class="chart-widget md:col-span-6 col-span-12">
        <va-card-title>经营产业</va-card-title>
        <va-card-content>
          <va-chart class="chart" :data="barChartDataGenerated" type="bar" />
        </va-card-content>
      </va-card>

      <va-card v-if="horizontalBarChartDataGenerated" class="chart-widget md:col-span-6 col-span-12">
        <va-card-title>经营区域</va-card-title>
        <va-card-content>
          <va-chart class="chart" :data="horizontalBarChartDataGenerated" type="horizontal-bar" />
        </va-card-content>
      </va-card>
      <va-card class="col-span-12">
        <va-card-title> 相关新闻</va-card-title>
        <va-card-content>
          <va-accordion v-model="customHeaderAccordionValue">
            <va-collapse class="mb-8">
              <template #header>
                <va-button class="w-full"> “兔茅”下架 茅台上线龙年茅台酒 有店铺已加价3500元 </va-button>
              </template>
              <div class="p-4">
                <div>
                  生肖酒每年一月初“上新”,已成为贵州茅台的“例牌菜”。1月6日晚间,贵州茅台正式发布了12生肖酒中的甲辰龙年贵州茅台酒(下文简称“龙茅”,下文未特别标注均为53度500ml规格),并且在1月7日正式开放申购资格抽取。南都湾财社-酒水新消费指数课题组记者留意到,与此前的“虎茅”“兔茅”一样,“龙茅”的主要申购平台为i茅台APP（均要抽取）,产品市场指导价为2499元/瓶。
                  据南都湾财社记者此前报道,去年11月底“兔茅”哈尔滨品鉴会期间,贵州茅台方面就预告“龙茅”即将上线发售。与去年初相同的是,“龙茅”上线当日,贵州茅台在i茅台上举行专场申购活动,“兔茅”“龙茅”均投放9999瓶。
                  不过,南都湾财社记者也注意到,相比2023年同期举行的“兔茅”上线专场,本次“龙茅”上线专场的投放量有所下降,当时茅台投放的“虎茅”“兔茅”各29999瓶。
                  据了解,自“虎茅”开始在i茅台进行申购销售后,生肖茅台酒对i茅台的收益提振作用较大。根据2023年贵州茅台前三季报显示,i茅台实现酒类不含税收入为148.71亿元。
                  与此前贵州茅台发布生肖茅台酒的情况相似的是,“龙茅”一上线,其市场流通价格被拉高,根据淘宝店铺“阿里资产自营服务”挂出的价格显示,“龙茅”售价为5999元/瓶。南都湾财社记者还留意到,1月7日“龙茅”上线后,经销商方面尚未有批发报价,不过据今日酒价数据,已下架的“兔茅”批价为3170元/瓶,较前一日下跌10元。
                  有第三方店铺已挂出“龙茅”零售价,价格比定价高出3500元。
                  公开资料显示,自2014年贵州茅台推出生肖酒后,每年发布生肖系列茅台酒及系列酒成为该公司“例牌动作”,包括龙茅在内,贵州茅台已连续发布了11款生肖酒,并且在市场中获得较高的青睐和定价。其中最早推出的“马茅”“羊茅”因数量较少,其经销商报价已达到17500元/瓶和30000元/瓶,而随后推出的生肖茅台,除“猴茅”和“虎茅”为4900元/瓶和4450元/瓶外,其他的报价均未超过4000元/瓶。
                  据南都湾财社记者了解,作为“非标”产品的茅台酒,茅台生肖酒对贵州茅台的文化赋能价值高于其产生的经济效益,业界认为,在业内看来,生肖酒承载着丰富的传统价值和文化意义,推出生肖酒更多会提高企业文化价值。
                  相关数据显示,目前生肖酒大约有200亿元的市场规模,其主要满足消费者礼赠、收藏、品鉴与投资消费市场。
                  实际上,自贵州茅台推出生肖酒后,各家酒企也先后进行效仿,以2023年底至今年初为例,包括五粮液、泸州老窖、舍得、洋河股份和古井贡酒等知名白酒品牌纷纷推出龙年生肖酒,据南都湾财社记者不完全统计,目前推出生肖酒的大小酒企已不下10家。
                  除生肖酒外,南都湾财社记者留意动,临近年末贵州茅台频繁“上新”,例如去年12月31日,贵州茅台发布以巽风数字世界为唯一销售渠道的贵州茅台酒(巽風,53度375毫升)；另外,其融合敦煌文化的贵州茅台酒(散花飞天)也即将在今年1月上市。
                  临近农历新年,各家酒企在生肖酒领域持续上新,在当下酒水渠道库存高且价格倒挂的大背景下,上新生肖酒对于酒企是否有正向影响？对市场又产生哪些作用？南都湾财社-酒水新消费指数课题组记者将持续关注。
                </div>
              </div>
            </va-collapse>
            <va-collapse>
              <template #header>
                <va-button class="w-full"> 贵州茅台:贵州茅台2023年度生产经营情况公告 </va-button>
              </template>
              <div>
                <div class="p-4">
                  2023 年度生产经营情况公告
                  本公司董事会及全体董事保证本公告内容不存在任何虚假记载、误导性陈述或者重大遗漏，并对其内容的真实性、准确性和完整性承担法律责任。
                  一、2023 年度生产经营情况 经贵州茅台酒股份有限公司（以下简称“公司”）初步核算，2023
                  年度，公司生产茅台酒基酒约 5.72 万吨，系列酒基酒约 4.29 万吨；预计实现营业总收入约 1,495
                  亿元（其中茅台酒营业收入约 1,258 亿元，系列酒营业收入约 204 亿元），同比增长约
                  17.2%；预计实现归属于上市公司股东的净利润约 735 亿元，同比增长约 17.2%。 二、说明事项
                  （一）上述生产经营数据仅为初步核算数据，未经会计师事务所审计，存在不确定性因素，敬请投资者予以关注。
                  （二）《中国证券报》《上海证券报》以及上海证券交易所网站（http://www.sse.com.cn）为公司指定的信息披露报刊和网站，公司发布的信息以在上述指定报刊和网站刊登的公告为准。敬请广大投资者理性投资，注意风险。
                  特此公告。
                </div>
              </div>
            </va-collapse>
          </va-accordion>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  import { useChartData } from '../../../../data/charts/composables/useChartData'
  import {
    lineChartData,
    // doughnutChartData,
    // bubbleChartData,
    pieChartData,
    barChartData,
    horizontalBarChartData,
  } from '../../../../data/charts'
  import VaChart from '../../../../components/va-charts/VaChart.vue'
  import { useRouter } from 'vue-router'

  const lineChartDataGenerated = useChartData(lineChartData, 0.7)
  // const doughnutChartDataGenerated = useChartData(doughnutChartData)
  // const bubbleChartDataGenerated = useChartData(bubbleChartData, 0.9)
  const pieChartDataGenerated = useChartData(pieChartData)
  const barChartDataGenerated = useChartData(barChartData)
  const horizontalBarChartDataGenerated = useChartData(horizontalBarChartData)

  const router = useRouter()
  const customHeaderAccordionValue = ref([false, false])
  const goBack = () => {
    router.go(-1) // 使用 Vue Router 返回上一个页面
  }
</script>

<style lang="scss" scoped>
  .chart {
    height: 30vw;
  }
  .card {
    height: 18vw;
  }
  h1,
  h3,
  .price {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 1.6vw;
    margin-left: 1.3vw;
  }
  h3 {
    font-size: 1.5vw;
    color: #ff0000;
  }
  .price {
    font-size: 3.3vw;
    color: red;
    font-weight: bolder;
  }
  .interact {
    display: flex;
    justify-content: space-between;
  }
  .text {
    font-size: 1.5vw;
    font-weight: bold;
  }
  .chart-wiget {
    height: 26vw;
  }
</style>
