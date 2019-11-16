<template>
  <nuxt-link to="/" class="site-logo">
    <img src="~/assets/images/min-logo.png" />
  </nuxt-link>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.site-logo {
  height: $header-height;
  display: flex;
  align-items: center;
  img {
    height: 45px;
  }
}
</style>
