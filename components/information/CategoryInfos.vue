<template>
  <div class="infos-list">
    <ul v-if="infos.length > 0">
      <li v-for="info in infos" :key="info.id">
        <div class="info-list-item">
          <h3 class="info-title">{{ info.title }}</h3>
          <div v-html="info.content" class="info-text"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryInfos',
  props: {
    infos: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.infos-list {
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    flex: 0 1 50%;
    margin-bottom: 16px;
    padding: 16px;
  }
  .info-list-item {
    padding: 24px;
    border: 1px solid $divider;
  }
}
</style>
