<template>
  <section ref="newsbarSection" class="newsbar-section">
    <div class="container">
      <newsbar :condensed="condensed" />
    </div>
  </section>
</template>

<script>
import Newsbar from './Newsbar'
export default {
  name: 'NewsbarSection',
  components: { Newsbar },
  data: () => ({
    condensed: false
  }),
  mounted() {
    const top = this.$refs.newsbarSection.getBoundingClientRect().top
    window.addEventListener('scroll', () => {
      if (window.pageYOffset + 60 >= top) {
        this.$refs.newsbarSection.classList.add('expand')
        this.condensed = true
      } else {
        this.$refs.newsbarSection.classList.remove('expand')
        this.condensed = false
      }
    })
  }
}
</script>

<style lang="scss">
.newsbar-section {
  background-color: #fff;
  position: sticky;
  top: 65px;
  z-index: 98;
  box-shadow: 0 0 50px rgba(200, 200, 200, 0.5);
  .container {
    transition: all 0.25s;
  }

  &.expand .container {
    max-width: 100%;
  }
}
</style>
