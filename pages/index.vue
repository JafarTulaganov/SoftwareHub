<template>
  <div class="master">
    <DesktopNavbar />
    <HomeHero />
    <HomeServices />
    <HomeInfo />
    <HomeBenefits />
    <HomeProgress />
    <HomeIndustry />
    <HomePartners />
    <HomeForm />
  </div>
</template>

<script>
import newsApi from '@/api/news'

import DesktopNavbar from '@/components/DesktopNavbar.vue'
import HomeHero from '@/components/HomeHero.vue'
import HomeServices from '@/components/HomeServices.vue'
import HomeInfo from '@/components/HomeInfo.vue'
import HomeBenefits from '@/components/HomeBenefits.vue'
import HomeProgress from '@/components/HomeProgress.vue'
import HomeIndustry from '@/components/HomeIndustry.vue'
import HomePartners from '@/components/HomePartners.vue'
import HomeForm from '@/components/HomeForm.vue'

export default {
  name: 'IndexPage',

  components: {
    DesktopNavbar,
    HomeHero,
    HomeServices,
    HomeInfo,
    HomeBenefits,
    HomeProgress,
    HomeIndustry,
    HomePartners,
    HomeForm,
  },

  async asyncData({ $axios }) {
    const news = await newsApi.getNews($axios)

    console.log(news)

    return {
      news,
    }
  },
}
</script>
