<template>
  <div class="footer-links">
    <h3 class="footer-section-title">{{ title }}</h3>
    <ul class="links-list">
      <li v-for="(link, i) in links" :key="i">
        <fa :icon="['fas', 'angle-left']" />
        <a :href="link.href">{{ $t(link.title) }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterLinks',
  props: {
    links: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-links {
  font-size: 14px;
  a {
    color: $footer-color-secondary;
  }
  .links-list {
    padding: 0;
    list-style: none;
  }
  li {
    display: flex;
    align-items: center;
    line-height: 1;
    margin-top: 10px;
    svg {
      margin-left: 4px;
    }
    path {
      fill: $footer-color-secondary;
    }
  }
}
</style>
