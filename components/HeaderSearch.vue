<template>
  <div class="header-search">
    <b-button id="header-search-popup-button" variant="link">
      <search-icon />
    </b-button>
    <b-popover
      target="header-search-popup-button"
      placement="bottom"
      custom-class="header-search-popup"
    >
      <b-nav-form>
        <b-form-input
          size="sm"
          class="mr-sm-2"
          placeholder="Search"
        ></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit"
          >Search
        </b-button>
      </b-nav-form>
    </b-popover>
  </div>
</template>

<script>
import { SearchIcon } from './Icons'

export default {
  components: {
    SearchIcon
  }
}
</script>

<style lang="scss">
.header-search-popup {
  .popover-body {
    padding: 16px;
  }
}
</style>
