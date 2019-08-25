<template>
  <div>
    <hero />
    <info-of-today />
  </div>
</template>

<script>
import Hero from '~/components/hero/Hero'
import InfoOfToday from '~/components/iot/InfoOfToday'

export default {
  components: {
    Hero,
    InfoOfToday
  }
}
</script>
