<template>
  <section ref="newsbarSection" class="newsbar-section">
    <div class="container">
      <newsbar />
    </div>
  </section>
</template>

<script>
import Newsbar from './Newsbar'
export default {
  name: 'NewsbarSection',
  components: { Newsbar },
  mounted() {
    const top = this.$refs.newsbarSection.getBoundingClientRect().top
    window.addEventListener('scroll', () => {
      if (window.pageYOffset + 60 >= top) {
        this.$refs.newsbarSection.classList.add('expand')
      } else {
        this.$refs.newsbarSection.classList.remove('expand')
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
  z-index: 99;
  .container {
    transition: all 0.25s;
  }

  &.expand .container {
    max-width: 100%;
  }
}
</style>
