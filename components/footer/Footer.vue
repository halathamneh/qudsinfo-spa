<template>
  <footer>
    <b-container>
      <b-row>
        <b-col>
          <h3>{{ $t('language') }}</h3>
          <div>
            <select name="language" id="language">
              <option value="ar"
                >{{ $t('arabic') }} - {{ $t('arabic-short') }}</option
              >
              <option value="en"
                >{{ $t('english') }} - {{ $t('english-short') }}</option
              >
            </select>
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
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  padding-top: 120px;
}
</style>
