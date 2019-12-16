<template>
  <div>
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import Header from '~/components/header/Header'
import Footer from '~/components/footer/Footer'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>
