<template>
  <div class="flex-layout-page">
    <app-header />
    <infos-header />
    <div class="page-container container">
      <nuxt />
    </div>
    <app-footer />
  </div>
</template>

<script>
import InfosHeader from '../components/information/InfosHeader'
import Header from '~/components/header/Header'
import Footer from '~/components/footer/Footer'
export default {
  name: 'Info',
  components: {
    appHeader: Header,
    appFooter: Footer,
    InfosHeader
  }
}
</script>

<style scoped></style>
