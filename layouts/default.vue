<template>
  <div>
    <app-header />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/header/Header'

export default {
  components: {
    appHeader: Header
  }
}
</script>
