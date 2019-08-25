<template>
  <div class="clouds-container">
    <cloud class="cloud-1" />
    <cloud class="cloud-2" />
    <cloud class="cloud-3" />
    <cloud class="cloud-4" />
  </div>
</template>

<script>
import Cloud from '~/assets/images/cloud.svg?inline'

export default {
  components: {
    Cloud
  }
}
</script>

<style lang="scss">
.clouds-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  svg {
    position: absolute;
    right: -10%;
  }
  .cloud-1 {
    top: 48px;
    animation: clouds-moving 75s linear infinite,
      clouds-hovering 1s ease-in-out infinite alternate-reverse;
  }
  .cloud-2 {
    top: 60px;
    opacity: 0.4;
    transform: scale(0.85);
    animation: clouds-moving 60s linear infinite,
      clouds-hovering 1s ease-in-out infinite alternate-reverse;
    animation-delay: 20s;
  }
  .cloud-3 {
    top: 180px;
    opacity: 0.2;
    transform: scale(0.79);
    animation: clouds-moving 55s linear infinite,
      clouds-hovering 1s ease-in-out infinite alternate-reverse;
    animation-delay: 5s;
  }
  .cloud-4 {
    top: 299px;
    opacity: 0.1;
    transform: scale(1.12);
    animation: clouds-moving 70s linear infinite,
      clouds-hovering 1s ease-in-out infinite alternate-reverse;
    animation-delay: 30s;
  }
}
@keyframes clouds-moving {
  from {
    right: -10%;
  }
  to {
    right: 105%;
  }
}
@keyframes clouds-hovering {
  from {
    transform: translateY(-2px);
  }
  to {
    transform: translateY(2px);
  }
}
</style>
