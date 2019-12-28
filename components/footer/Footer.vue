<template>
  <footer>
    <b-container>
      <b-row>
        <b-col>
          <h3>{{ $t('language') }}</h3>
          <div>
            <LangSwitchDropdown />
          </div>
        </b-col>
        <b-col>Services</b-col>
        <b-col>About</b-col>
        <b-col>logo</b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import LangSwitchDropdown from '../LangSwitchDropdown'
export default {
  name: 'Footer',
  components: { LangSwitchDropdown }
}
</script>

<style scoped>
footer {
  padding-top: 120px;
  padding-bottom: 40px;
}
</style>
