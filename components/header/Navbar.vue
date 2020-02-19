<template>
  <b-navbar toggleable="xl" type="dark">
    <navbar-toggler
      :class="{ 'navbar-toggler': true, 'bring-to-front': menuVisible }"
      :active="menuVisible"
      :toggle-menu="toggleMenu"
    />
    <div
      id="nav-collapse"
      v-if="menuVisible || desktop"
      class="navbar-collapse"
    >
      <b-navbar-nav>
        <nuxt-link class="nav-link" to="/information">معلوماتنا</nuxt-link>
        <nuxt-link class="nav-link" to="/">القدس عن قرب</nuxt-link>
        <nuxt-link class="nav-link" to="/">الأخبار</nuxt-link>
        <nuxt-link class="nav-link" to="/">المكتبة</nuxt-link>
        <nuxt-link class="nav-link" to="/">المسابقات</nuxt-link>
        <nuxt-link class="nav-link" to="/">Wallpapers</nuxt-link>
        <nuxt-link class="nav-link" to="/">صور المعالم</nuxt-link>
        <nuxt-link class="nav-link" to="/">أفرقتنا</nuxt-link>
        <nuxt-link class="nav-link" to="/">عن الفريق</nuxt-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="mr-md-auto">
        <header-search />
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>

<style lang="scss">
.navbar {
  flex: 1;
  padding-right: 0;
  padding-left: 0;

  &-nav {
    padding-right: 20px;
  }
}

.nav-link {
  margin-left: 8px;
  white-space: nowrap;
}

.navbar-toggler {
  margin-right: auto;
  margin-left: 16px;
  display: flex;

  &.bring-to-front {
    z-index: 9999;
  }
}

@include media-breakpoint-down('lg') {
  .navbar-collapse {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
  }
  .nav-link {
    margin: 16px 0 0;
    font-size: 20px;
    font-weight: 400;
  }
  .close-button {
    position: absolute;
    left: 16px;
    top: 16px;
    padding: 8px 16px;
  }
  svg.close-icon {
    path {
      fill: #fff;
    }
  }
}
</style>

<script>
import throttle from 'lodash/throttle'
import HeaderSearch from '../HeaderSearch'
import NavbarToggler from './NavbarToggler'

export default {
  components: { HeaderSearch, NavbarToggler },
  data() {
    return {
      menuVisible: false,
      desktop: false
    }
  },
  mounted() {
    this.onWindowResize()
    window.addEventListener('resize', this.onWindowResize)
  },

  destroyed() {
    window.removeEventListener('resize', this.onWindowResize)
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    },
    onWindowResize: throttle(function() {
      this.desktop = document.documentElement.clientWidth > 1200
    }, 100)
  }
}
</script>
