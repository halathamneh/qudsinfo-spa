<template>
  <div class="infos-list">
    <ul v-if="infos.length > 0">
      <li v-for="(info, i) in infos" :key="i">
        {{ info.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryInfos',
  props: {
    infos: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped></style>
