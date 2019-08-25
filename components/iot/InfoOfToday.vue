<template>
  <section class="info-of-today-section">
    <b-container>
      <iot-badge />
      <b-card
        class="rounded mt-3 iot-card"
        img-src="/images/placeholder.svg"
        img-end
        no-body
      >
        <b-card-body>
          <b-card-sub-title>العقيدة اليهودية</b-card-sub-title>
          <b-card-title>تحريف التوراة</b-card-title>
          <b-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium asperiores autem sint veniam veritatis. Aliquam
            architecto atque, corporis dolorum eum ex facere facilis fuga magni
            nemo, ratione rerum ullam voluptatibus?
          </b-card-text>

          <div class="card-links mt-auto">
            <nuxt-link class="btn btn-primary" to="#">عرض المعلومة</nuxt-link>
            <nuxt-link class="btn btn-link" to="#">جميع المعلومات</nuxt-link>
          </div>
        </b-card-body>
      </b-card>
      <!--      <div class="d-flex justify-content-end">-->
      <!--        <img src="/images/placeholder.svg" alt="" />-->
      <!--      </div>-->
    </b-container>
  </section>
</template>

<script>
import IotBadge from '~/components/iot/IotBadge.vue'

export default {
  components: {
    IotBadge
  }
}
</script>

<style lang="scss">
.info-of-today-section {
  margin: 28px 0 50px;
}
.iot-card {
  overflow: hidden;

  @include media-breakpoint-down('sm') {
    flex-direction: column-reverse !important;
    .card-img-right {
      object-fit: cover;
    }
  }

  .card-title {
    font-weight: 700;
    font-size: 24px;
    margin-top: 16px;
  }
  .card-body {
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
  }
  .card-text {
    margin: 8px 0 16px;
  }
}
</style>
