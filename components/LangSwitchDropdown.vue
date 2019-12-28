<template>
  <b-select id="language" :value="selected" name="language">
    <option value="ar">{{ $t('arabic') }} - {{ $t('arabic-short') }}</option>
    <option value="en">{{ $t('english') }} - {{ $t('english-short') }}</option>
  </b-select>
</template>

<script>
export default {
  name: 'LangSwitchDropdown',
  data: () => ({
    selected: 'ar'
  })
}
</script>

<style scoped></style>
