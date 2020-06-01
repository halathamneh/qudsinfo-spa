<template>
  <perfect-scrollbar class="infos-subjects-tree">
    <h3>{{ $t('subjects') }}</h3>
    <tree-loader v-if="loading" />
    <tree :nodes="subjects" :active="$route.path" />
  </perfect-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import Tree from '../tree/Tree'
import TreeLoader from '../common/loaders/TreeLoader'

export default {
  name: 'InfosTree',
  components: { TreeLoader, Tree },
  computed: mapGetters({
    subjects: 'infos/subjects',
    loading: 'infos/subjectsLoading'
  }),
  mounted() {
    this.$store.dispatch('infos/fetchCategories')
  }
}
</script>

<style lang="scss">
.infos-subjects-tree {
  margin: 8px 0 0 -30px;
  padding: 30px 30px 40px;
  background-color: #e5e5e5;
  border-radius: 0 5px 5px 0;
  &.ps {
    height: calc(100vh - 66px);
    top: 66px;
    position: sticky;
  }
  h3 {
    color: $text-muted;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
  }
}
</style>
