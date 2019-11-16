<template>
  <div class="team-slideshow-item">
    <div class="item-content">
      <div class="item-text">
        <h3>title</h3>
        <p>text</p>
      </div>
      <div class="item-actions"></div>
    </div>
    <div class="item-image">
      <img src="" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamSlideshowItem'
}
</script>

<style lang="scss" scoped>
.team-slideshow-item {
  background-color: $white;
  padding: 80px 90px;
  display: flex;
}
</style>
