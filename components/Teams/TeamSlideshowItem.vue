<template>
  <div class="team-slideshow-item">
    <div class="item-content">
      <div class="item-text">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
      <div class="item-text-bottom">
        <div v-for="(statItem, i) in item.stats" :key="i" class="stats-item">
          {{ statItem.number }}
        </div>
      </div>
    </div>
    <div class="item-image">
      <img src="" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamSlideshowItem',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.team-slideshow-item {
  background-color: $white;
  padding: 80px 90px;
  display: flex;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
  border-radius: 38px;
}
.item-text-bottom {
  display: flex;
}
</style>
