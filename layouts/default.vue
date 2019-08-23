<template>
  <div>
    <app-header />
    <hero />
    <nuxt />
  </div>
</template>

<script>
import Hero from '../components/sections/Hero'
import Header from '~/components/partials/Header'

export default {
  components: {
    appHeader: Header,
    Hero
  }
}
</script>
