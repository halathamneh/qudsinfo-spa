<template>
  <div class="tree-loader">
    <div class="placeholder-primary w-75"></div>
    <div class="placeholder-primary"></div>
    <div class="placeholder-secondary w-100"></div>
    <div class="placeholder-secondary"></div>
    <div class="placeholder-primary"></div>
    <div class="placeholder-secondary w-50"></div>
  </div>
</template>

<script>
export default {
  name: 'TreeLoader'
}
</script>

<style lang="scss" scoped>
.tree-loader {
  display: flex;
  flex-direction: column;
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

.placeholder-secondary {
  margin-right: 30px;
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
