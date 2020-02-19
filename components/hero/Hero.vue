<template>
  <section :class="{ 'section-hero': true, animate: start }">
    <div class="section-clipped gradient-primary">
      <clouds />
      <b-container style="height: 90%;padding-top: 65px">
        <div class="d-flex align-items-center h-100 flex-column flex-md-row">
          <div class="text-md-right text-center">
            <img src="/images/logo.png" alt="" class="logo d-none d-md-block" />
            <h1>QudsInfo.com</h1>
            <p class="slogan">{{ $t('slogan') }}</p>
          </div>
          <hero-laptop class="mt-md-0 mt-auto mr-auto ml-auto ml-md-0" />
        </div>
      </b-container>
    </div>
  </section>
</template>

<script>
import Clouds from '~/components/Clouds.vue'
import HeroLaptop from '~/components/HeroLaptop.vue'

export default {
  components: {
    Clouds,
    HeroLaptop
  },
  data() {
    return {
      start: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.start = true
    }, 1000)
  }
}
</script>

<style lang="scss">
:root {
  --hero-height: 400px;
  --hero-ellipses-width: 100%;
  @include media-breakpoint-down('sm') {
    --hero-ellipses-width: 150%;
  }
}
.section-hero {
  height: var(--hero-height);
  width: 100%;
  filter: drop-shadow(0px 4px 20px rgba(133, 133, 133, 0.75));

  .logo {
    margin: 0 -24px 24px 0;
  }

  h1 {
    color: #fff;
    margin: 0;
    font-size: 40px;
    font-weight: bold;
    display: block;
  }
  .slogan {
    font-size: 24px;
    color: #c9b4d1;
    margin: 8px 0;
  }
}

.section-clipped {
  clip-path: ellipse(var(--hero-ellipses-width) var(--hero-height) at 50% 0%);
  height: 100%;
  width: 100%;
}
</style>
