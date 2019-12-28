<template>
  <div class="team-slideshow-item">
    <div class="item-content">
      <div class="item-text">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
      <div class="item-text-bottom">
        <div v-for="(statItem, i) in item.stats" :key="i" class="stats-item">
          <div class="stats-item-circle">
            <span class="stats-item-number">{{ statItem.number }}</span>
            <span v-show="statItem.unit" class="stats-item-unit">{{
              statItem.unit
            }}</span>
          </div>
          <span class="stats-item-label">{{ statItem.label }}</span>
        </div>
        <a :href="item.href" class="stats-item stats-read-more">
          <div class="stats-item-circle">
            <fa :icon="['fas', 'arrow-left']" size="2x" />
          </div>
          <span class="stats-item-label">{{ $t('know more') }}</span>
        </a>
      </div>
    </div>
    <div class="item-image">
      <img :src="require(`~/assets/images/teams/${item.name}.svg`)" alt="" />
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
  height: 425px;
  margin-bottom: 32px;
  &:nth-child(even) {
    flex-direction: row-reverse;
    img {
      margin-right: 0;
      margin-left: 18px;
    }
  }
}
.item-text-bottom {
  display: flex;
}
.item-content {
  flex: 1;
}
h3 {
  font-size: 36px;
  color: $brand-dark;
  font-weight: 700;
  margin-bottom: 24px;
}
img {
  max-width: 325px;
  height: 100%;
  margin-right: 28px;
  margin-left: 0;
}
.stats-item {
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  color: $brand-dark;
  text-align: center;
  &-circle {
    width: 87px;
    height: 87px;
    border: 1px solid $brand-light;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto 8px;
    line-height: 1;
  }
  &-number {
    font-size: 24px;
    font-weight: bold;
    font-family: 'Exo 2', sans-serif;
  }
  &.stats-read-more {
    .stats-item-circle {
      background: $brand-dark;
      color: #fff;
      border: none;
    }
  }
}
</style>
