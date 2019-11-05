<template>
  <div class="on-this-day-banner">
    <div class="otd-title">{{ $t('otd-title') }}</div>
    <b-card no-body class="rounded no-shadow">
      <template v-slot:header>
        <b>05 حزيران</b>
        <br />
        <span>الموافق 12 ربيع الأول</span>
      </template>
      <b-list-group flush>
        <b-list-group-item>Test</b-list-group-item>
        <b-list-group-item>Test 2</b-list-group-item>
      </b-list-group>
      <b-card-body>
        <b-link href="#">
          {{ $t('learn more') }}
          <fa :icon="['fas', 'angle-double-left']" />
        </b-link>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'OnThisDay'
}
</script>

<style lang="scss">
.otd-title {
  padding: 12px 24px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #6a6a6a;
}
.on-this-day-banner {
  height: 100%;
  display: flex;
  flex-direction: column;
  .card {
    flex: 1;
    background-color: transparent;
    border: 1px solid #dedede;
  }
  .card-header {
    background-color: #e5e5e5;
    text-align: center;
    border-bottom: 4px solid #d70e0e;
    position: relative;
    &::after {
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: #d70e0e;
      content: '';
      top: 100%;
      left: 0;
      z-index: 99;
      box-shadow: 0 0 15px rgba(215, 14, 14, 0.5);
    }
  }
  .list-group-item {
    background-color: transparent;
    border-color: #e5e5e5;
    &:first-child {
      padding-top: 24px;
    }
  }
}
</style>
