<template>
  <header>
    <logo />
  </header>
</template>

<script>
import Logo from './Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
header {
  box-sizing: border-box;
  height: 65px;
  display: flex;
  align-items: center;
  padding: 0 35px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.05);
}
</style>
