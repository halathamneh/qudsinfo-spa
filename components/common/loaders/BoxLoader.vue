<template>
  <div class="box-loader">
    <div class="flex-fill ml-4">
      <div class="placeholder-primary w-50"></div>
      <div class="placeholder-secondary w-100"></div>
      <div class="placeholder-primary w-25"></div>
    </div>
    <div class="loader-image"></div>
  </div>
</template>

<script>
export default {
  name: 'BoxLoader'
}
</script>

<style lang="scss" scoped>
.box-loader {
  display: flex;
  width: 100%;
}
.placeholder-primary,
.placeholder-secondary {
  height: 14px;
  border-radius: 14px;
  margin-top: 28px;
  background: rgba($text-muted, 0.4);
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    right: -65px;
    top: 0;
    width: 65px;
    height: 100%;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(230, 230, 230, 0.75) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: 2s rotating infinite;
  }
}

.loader-image {
  width: 125px;
  height: 125px;
  background: rgba($text-muted, 0.4);
}

@keyframes rotating {
  from {
    right: -45px;
  }
  to {
    right: calc(100% + 45px);
  }
}
</style>
