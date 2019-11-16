<template>
  <section class="aqsa-distance-section" :class="[status]">
    <aqsa-distance-overlay v-if="status === 'in-progress'" :cancel="cancel" />

    <dome-svg ref="dome-svg" class="dome-svg" />
    <div class="section-art">
      <aqsa-distance-art />
    </div>

    <div class="container">
      <div class="section-header">
        <div class="pin-image-wrapper">
          <img
            ref="pin-image"
            class="pin-image"
            src="~/assets/images/pin.png"
            alt=""
          />
        </div>
        {{ $t('your aqsa distance') }}
      </div>
      <div class="section-content">
        <button
          id="aqsa-distance-button"
          class="btn btn-lg btn-aqsa-distance"
          @click="aqsaDistanceClick"
        >
          {{ $t('click aqsa distance') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import AqsaDistanceArt from './AqsaDistanceArt'
import AqsaDistanceOverlay from './AqsaDistanceOverlay'
import DomeSvg from '~/assets/images/dome.svg?inline'

export default {
  name: 'AqsaDistanceSection',
  components: { AqsaDistanceOverlay, AqsaDistanceArt, DomeSvg },
  data: () => ({
    status: 'idle'
  }),
  methods: {
    aqsaDistanceClick() {
      document.body.classList.add('modal-open')
      this.setPositionItems()
      this.status = 'in-progress'
    },
    findDistance() {},
    cancel() {
      document.body.classList.remove('modal-open')
      this.status = 'idle'
    },
    setPositionItems() {
      const domeRef = this.$refs['dome-svg']
      const domeRect = domeRef.getBoundingClientRect()
      domeRef.style.top = `${domeRect.top}px`
      domeRef.style.left = `${domeRect.left}px`

      const pinRef = this.$refs['pin-image']
      const pinRect = pinRef.getBoundingClientRect()
      pinRef.style.top = `${pinRect.top}px`
      pinRef.style.left = `${pinRect.left}px`

      setTimeout(() => {
        this.clearItemsPosition()
      }, 1)
    },
    clearItemsPosition() {
      this.$refs['dome-svg'].style.top = ''
      this.$refs['dome-svg'].style.left = ''
      this.$refs['pin-image'].style.top = ''
      this.$refs['pin-image'].style.left = ''
    }
  }
}
</script>
