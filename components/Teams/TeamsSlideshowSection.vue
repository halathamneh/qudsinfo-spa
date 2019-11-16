<template>
  <section class="teams-slider-section">
    <div class="container">
      <div class="section-title">
        <h2>{{ $t('teams') }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamsSlideshowSection'
}
</script>

<style lang="scss" scoped>
.teams-slider-section {
  background: $brand-gradient;
  padding: 75px 16px;
  h2 {
    border-color: #59af30;
    color: $white;
  }
}
</style>
