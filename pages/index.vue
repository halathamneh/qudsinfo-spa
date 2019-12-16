<template>
  <div>
    <hero />
    <info-of-today-section>
      <template slot="extra">
        <on-this-day />
      </template>
    </info-of-today-section>
    <newsbar-section />
    <aqsa-distance-section />
    <services-section />
    <teams-slideshow-section />
  </div>
</template>

<script>
import OnThisDay from '../components/on-this-day/OnThisDay'
import AqsaDistanceSection from '../components/aqsa-distance/AqsaDistanceSection'
import NewsbarSection from '../components/newsbar/NewsbarSection'
import ServicesSection from '../components/services/ServicesSection'
import TeamsSlideshowSection from '../components/Teams/TeamsSlideshowSection'
import InfoOfTodaySection from '../components/iot/InfoOfTodaySection'
import Hero from '~/components/hero/Hero'

export default {
  components: {
    InfoOfTodaySection,
    TeamsSlideshowSection,
    ServicesSection,
    NewsbarSection,
    AqsaDistanceSection,
    OnThisDay,
    Hero
  }
}
</script>

<style lang="scss">
.info-of-today-section {
  margin: 28px 0 50px;
}
</style>
