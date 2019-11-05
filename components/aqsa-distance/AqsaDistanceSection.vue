<template>
  <section class="aqsa-distance-section">
    <div class="container">
      <div class="section-header">
        <img
          src="https://qudsinfo.com/wp-content/themes/qudsinfo-wp-theme/layout/src/images/pin.png"
          alt=""
        />
        بعدك عن الأقصى
      </div>
      <!--        <span>--><!--</span>-->

      <div class="section-content">
        <button id="aqsa-distance-button" class="btn btn-lg btn-aqsa-distance">
          اضغط هنا لحساب بعدك!
        </button>
        <svg viewBox="0 0 100 150" width="50" height="75">
          <g>
            <path d="M 50,100 A 1,1 0 0 1 50,0"></path>
          </g>
          <g>
            <path d="M 50,75 A 1,1 0 0 0 50,-25"></path>
          </g>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style="stop-color:#FF6E41;stop-opacity:1"
              ></stop>
              <stop
                offset="100%"
                style="stop-color:#eab44e;stop-opacity:1"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AqsaDistanceSection'
}
</script>

<style scoped></style>
