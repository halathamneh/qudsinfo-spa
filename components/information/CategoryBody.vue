<template>
  <div class="card category-body">
    <img src="https://picsum.photos/900/250/?image=3" alt="" class="card-img" />
    <div class="card-head">
      <h2 class="card-title text-white font-weight-bold">{{ slug }}</h2>
    </div>
    <div class="card-body">
      <tree-loader v-if="loading" />
      <div v-else v-html="category.description" class="card-text"></div>
    </div>
  </div>
</template>

<script>
import endpoints from '../../config/EndPoints'
import TreeLoader from '../common/loaders/TreeLoader'

export default {
  name: 'CategoryBody',
  components: { TreeLoader },
  props: {
    slug: {
      type: String,
      default() {
        return this.$t('all information')
      }
    }
  },
  data: () => ({
    category: {},
    loading: true
  }),
  mounted() {
    this.$axios.$get(endpoints.infoCategory).then((data) => {
      this.category = data
      this.loading = false
    })
  }
}
</script>

<style lang="scss">
.category-body {
  border-radius: $border-radius;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(1, 101, 51, 0.2);
  .card-head {
    padding: 32px;
    background: $brand-gradient;
  }

  .card-img {
    height: 164px;
    object-fit: cover;
    border-radius: 0;
  }
  .card-text {
    max-width: 1140px;
    margin: 0 auto;
    padding: 24px;
    h4 {
      margin: 8px 0 16px;
    }
    p {
      margin-bottom: 32px;
    }
  }
}
</style>
