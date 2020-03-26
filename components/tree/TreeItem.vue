<template>
  <li
    :class="{
      'tree-item': true,
      expandable: isExpandable,
      active: isActive
    }"
  >
    <nuxt-link :to="node.to">{{ node.label }}</nuxt-link>
    <tree
      v-if="isExpandable"
      :subtree="true"
      :nodes="node.children"
      :active="active"
    />
  </li>
</template>

<script>
import Tree from './Tree'
export default {
  name: 'TreeItem',
  components: { Tree },
  props: {
    node: {
      type: Object,
      default: () => ({})
    },
    active: {
      type: String,
      default: () => ''
    }
  },
  data: () => ({
    isExpandable: false,
    isActive: false
  }),
  watch: {
    active(val) {
      this.isActive = this.node.to === val
    }
  },
  mounted() {
    this.isExpandable = this.node.children && this.node.children.length > 0
    this.isActive = this.node.to === this.active
  }
}
</script>

<style lang="scss">
.tree-item {
  margin-top: 4px;
  font-size: 14px;
  line-height: 1;
  a {
    display: inline-block;
    padding: 7px 0;
    color: #000;
  }
  &.active > a {
    font-weight: bold;
  }
  &.expandable {
  }
}
</style>
