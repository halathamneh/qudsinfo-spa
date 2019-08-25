<template>
  <header>
    <logo />
    <navbar />
  </header>
</template>

<script>
import Logo from '../partials/Logo.vue'
import Navbar from './Navbar'

export default {
  components: {
    Navbar,
    Logo
  }
}
</script>

<style lang="scss">
header {
  box-sizing: border-box;
  min-height: $header-height;
  display: flex;
  align-items: center;
  padding: 0 35px;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background-color: #4f3a83;
  @include media-breakpoint-down('sm') {
    padding: 0 8px;
  }
}
</style>
