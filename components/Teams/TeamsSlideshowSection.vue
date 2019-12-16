<template>
  <section class="teams-slider-section">
    <div class="container">
      <div class="section-title">
        <h2>{{ $t('teams') }}</h2>
      </div>
      <div class="section-content">
        <no-ssr placeholder="Loading...">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(team, i) in teams" :key="i" class="slide">
              <team-slideshow-item :item="team" />
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>
          </swiper>
        </no-ssr>
      </div>
    </div>
  </section>
</template>

<script>
import TeamSlideshowItem from './TeamSlideshowItem'
import TeamsData from './TeamsData'

export default {
  name: 'TeamsSlideshowSection',
  components: { TeamSlideshowItem },
  data: () => ({
    teams: TeamsData,
    swiperOption: {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      spaceBetween: 64
    }
  })
}
</script>

<style lang="scss" scoped>
.teams-slider-section {
  background: $brand-gradient;
  padding: 75px 16px;
  overflow: hidden;
  h2 {
    border-color: #59af30;
    color: $white;
  }
}
.swiper-container {
  overflow: visible;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  position: static;
  margin-top: 32px;
}
.swiper-slide {
  opacity: 0.5;
  transition: opacity 0.5s linear;
  &-active {
    opacity: 1;
  }
}
</style>
