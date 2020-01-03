<template>
  <div>
    <app-header />
    <infos-header />
    <nuxt />
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
