<template>
  <div>
    <hero />
    <section class="info-of-today-section">
      <b-container>
        <b-row>
          <b-col lg="9" class="mb-4">
            <info-of-today />
          </b-col>
          <b-col lg="3" class="mb-4">
            <on-this-day />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import OnThisDay from '../components/on-this-day/OnThisDay'
import Hero from '~/components/hero/Hero'
import InfoOfToday from '~/components/iot/InfoOfToday'

export default {
  components: {
    OnThisDay,
    Hero,
    InfoOfToday
  }
}
</script>

<style lang="scss">
.info-of-today-section {
  margin: 28px 0 50px;
}
</style>
