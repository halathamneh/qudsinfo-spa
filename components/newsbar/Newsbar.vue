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
  height: 60px;
}
.newsbar-title {
  background: $newsbar-gradient;
  flex: 0;
  padding: 22px 30px 16px;
  white-space: nowrap;
  line-height: 22px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}
.newsbar-content {
  flex: 1;
  padding: 22px 32px;
  font-size: 14px;
}
</style>
