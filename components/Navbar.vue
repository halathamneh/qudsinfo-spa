<template>
  <header>
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="/">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>
    <Logo />
    <b-nav>
      <nuxt-link to="/infos">Infos</nuxt-link>
    </b-nav>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
header {
  height: 65px;
  display: flex;
  align-items: center;
  padding: 0 35px;
}
</style>
