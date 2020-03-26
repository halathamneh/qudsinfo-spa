<template>
  <div class="infos-subjects-tree">
    <h3>{{ $t('subjects') }}</h3>
    <tree-loader v-if="loading" />
    <tree :nodes="subjects" :active="$route.path" />
  </div>
</template>

<script>
import Tree from '../tree/Tree'
import endpoints from '../../config/EndPoints'
import TreeLoader from '../common/loaders/TreeLoader'
export default {
  name: 'InfosTree',
  components: { TreeLoader, Tree },
  data: () => ({
    subjects: [],
    loading: true
  }),
  mounted() {
    this.$axios.$get(endpoints.infosCategories).then((data) => {
      this.subjects = data
      this.loading = false
    })
  }
}
</script>

<style lang="scss">
.infos-subjects-tree {
  margin: 8px 0 0 -30px;
  padding: 30px 30px 40px 80px;
  background-color: #e5e5e5;
  border-radius: 0 5px 5px 0;
  h3 {
    color: $text-muted;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
  }
}
</style>
