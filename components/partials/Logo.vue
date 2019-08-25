<template>
  <nuxt-link to="/" class="site-logo">
    <img src="/images/logo.png" />
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
