<template>
  <div class="infos-list">
    <ul v-if="infos.length > 0">
      <li v-for="info in infos" :key="info.id">
        <div class="info-list-item">
          <div class="info-body">
            <h3 class="info-title">{{ info.title }}</h3>
            <div v-html="info.excerpt" class="info-text"></div>
            <b-button variant="light" size="sm" class="mt-3">{{
              $t('view info')
            }}</b-button>
          </div>
          <img :src="info.image.thumbnail" />
        </div>
      </li>
    </ul>
    <ul v-else>
      <li>
        <div class="info-list-item"><box-loader /></div>
      </li>
      <li>
        <div class="info-list-item"><box-loader /></div>
      </li>
      <li>
        <div class="info-list-item"><box-loader /></div>
      </li>
    </ul>
  </div>
</template>

<script>
import BoxLoader from '../common/loaders/BoxLoader'
export default {
  name: 'CategoryInfos',
  components: { BoxLoader },
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
    border: 1px solid $divider;
    display: flex;
    height: 100%;
  }
  img {
    border-radius: 0 50% 50% 0;
    object-fit: cover;
    object-position: center;
    flex: 1;
  }
  h3 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  .info-body {
    padding: 24px 24px 24px 16px;
    width: 75%;
  }
}
</style>
