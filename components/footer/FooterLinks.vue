<template>
  <div :class="{ 'footer-links': true, toggled }">
    <h3 class="footer-section-title" @click="toggleLinks">
      {{ title }}
      <fa :icon="['fas', 'angle-down']" :class="{ rotate: toggled }" />
    </h3>
    <transition
      name="accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <ul v-show="toggled" class="links-list">
        <li v-for="(link, i) in links" :key="i">
          <fa :icon="['fas', 'angle-left']" />
          <a :href="link.href">{{ $t(link.title) }}</a>
        </li>
      </ul>
    </transition>
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
  },
  data: () => ({
    toggled: true
  }),
  mounted() {
    this.toggled = this.$mq === 'mobile'
  },
  methods: {
    toggleLinks() {
      if (this.$mq !== 'sm') {
        return
      }
      this.toggled = !this.toggled
    },
    beforeEnter(el) {
      el.style.height = '0'
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
      el.style.height = '0'
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
  h3 svg {
    display: none;
    transition: 0.2s transform;
    &.rotate {
      transform: rotate(180deg);
    }
  }
  @include media-breakpoint-down(sm) {
    margin-bottom: 20px;
    padding: 0 16px;
    transition: all 0.2s;
    &.toggled {
      background-color: rgba(0, 0, 0, 0.2);
      padding: 16px;
    }
    .links-list {
      padding-right: 16px;
    }
    h3 {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      svg {
        display: inline-block;
      }
    }
  }
}
</style>
