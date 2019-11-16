<template>
  <div class="overlay">
    <b-button-close @click="cancel" />
    <div class="overlay-content">
      <dots-horizontal-loader />
    </div>
  </div>
</template>

<script>
import DotsHorizontalLoader from '../loaders/DotsHorizontalLoader'

export default {
  name: 'AqsaDistanceOverlay',
  components: { DotsHorizontalLoader },
  props: {
    cancel: {
      type: Function,
      default: () => {}
    }
  },
  mounted() {
    this.findDistance()
  },
  methods: {
    findDistance() {}
  }
}
</script>
