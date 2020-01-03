<template>
  <div class="infos-header">
    <b-nav pills>
      <b-nav-text class="title">{{ $t('our info') }}:</b-nav-text>
      <b-nav-item
        :to="localePath('information')"
        :active="$route.path === localePath('information')"
      >
        <fa :icon="['fas', 'eye']" />
        {{ $t('written') }}
      </b-nav-item>
      <b-nav-item
        :to="localePath('information-audio')"
        :active="$route.path === localePath('information-audio')"
      >
        <fa :icon="['fas', 'headphones']" />
        {{ $t('audio') }}
      </b-nav-item>
      <b-nav-item
        :to="localePath('information-video')"
        :active="$route.path === localePath('information-video')"
      >
        <fa :icon="['fas', 'video']" />
        {{ $t('video') }}
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'InfosHeader'
}
</script>

<style lang="scss" scoped>
.infos-header {
  padding: 11px 24px;
  background: $white;
}
.title {
  font-weight: bold;
  margin: 0 16px;
  color: $primary-dark;
}
.nav {
  padding: 0;
  &-link {
    line-height: 1;
    color: #a0a0a0;
    &.active {
      background-color: $brand-dark;
    }
  }
}
</style>
