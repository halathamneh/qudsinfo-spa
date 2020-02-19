<template>
  <button
    :class="{
      hamburger: true,
      'hamburger--squeeze': true,
      'is-active': active
    }"
    @click="toggleMenu"
    type="button"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'NavbarToggler',
  props: {
    active: Boolean,
    toggleMenu: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.hamburger-inner,
.hamburger.is-active .hamburger-inner {
  background-color: $white;
  &:after,
  &:before {
    background-color: $white;
  }
}
</style>
