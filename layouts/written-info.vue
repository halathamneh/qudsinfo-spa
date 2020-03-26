<template>
  <div class="flex-layout-page">
    <app-header />
    <infos-header />
    <div class="page-container container-fluid">
      <b-row>
        <b-col cols="12" md="2">
          <infos-tree />
        </b-col>
        <b-col>
          <nuxt />
        </b-col>
      </b-row>
    </div>
    <app-footer />
  </div>
</template>

<script>
import InfosHeader from '../components/information/InfosHeader'
import InfosTree from '../components/information/InfosTree'
import Header from '~/components/header/Header'
import Footer from '~/components/footer/Footer'
export default {
  name: 'WrittenInfo',
  components: {
    InfosTree,
    appHeader: Header,
    appFooter: Footer,
    InfosHeader
  }
}
</script>

<style scoped></style>
