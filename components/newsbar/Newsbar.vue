<template>
  <div class="newsbar">
    <div class="newsbar-title">{{ $t('latest news') }}</div>
    <div class="newsbar-content">
      <vue-typed-js
        :strings="list"
        :fade-out="true"
        :loop="true"
        :show-cursor="false"
      >
        <span class="typing"></span>
      </vue-typed-js>
    </div>
    <div class="newsbar-link">
      <b-button variant="link" href="#" size="sm">
        <span class="d-none d-md-inline">{{ $t('all news') }}</span>
        <fa :icon="['fas', 'external-link-alt']" />
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Newsbar',
  data: () => ({
    list: [
      'قوات الاحتلال توزع أوامر وإخطارات هدم واستدعاءات لمراجعة بلدية الاحتلال في قرية العيسوية.',
      'قوات الاحتلال تُخلي منزلاً يعود لعائلة العباسي تمهيداً لهدمه في بلدة سلوان جنوب المسجد الأقصى.'
    ]
  })
}
</script>

<style lang="scss">
.newsbar {
  display: flex;
  min-height: 60px;
  align-items: center;
  .expand & {
    min-height: 40px;
  }
  @include media-breakpoint-down('sm') {
    margin: 0 -15px;
  }
}
.newsbar-title {
  background: $newsbar-gradient;
  flex: 0;
  padding: 0 30px;
  white-space: nowrap;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 60px;
  .expand & {
    min-height: 40px;
    padding: 10px 20px 8px;
    font-size: 14px;
  }
  @include media-breakpoint-down('sm') {
    min-height: 50px !important;
    padding: 10px 10px 8px !important;
    white-space: normal;
  }
}
.newsbar-content {
  flex: 1;
  padding: 0 32px;
  font-size: 14px;
  @include media-breakpoint-down('sm') {
    padding: 0 8px;
  }
  .typing {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
.newsbar-link {
  span {
    margin-left: 8px;
    transform: translateX(-70%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-in-out;
  }
  a {
    height: 40px;
    padding: 0 8px;
    &:hover {
      text-decoration: none;
      span {
        transform: none;
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>
