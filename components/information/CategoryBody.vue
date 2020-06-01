<template>
  <div class="card category-body">
    <div :class="imageWrapperClass">
      <img :src="category.image" alt="" class="card-img" />
      <div class="card-head">
        <h2 class="card-title text-white font-weight-bold">
          {{ category.label }}
        </h2>
        <div v-if="hasDescription" class="mr-auto">
          <transition name="fade">
            <b-button
              v-if="!isInfosMode"
              @click="toggleInfos"
              variant="success"
              >{{ $t('show infos') }}</b-button
            >
            <b-button v-else @click="toggleInfos" variant="light">
              <fa :icon="['fas', 'arrow-right']" />
              <span class="mr-2">{{ $t('back') }}</span>
            </b-button>
          </transition>
        </div>
      </div>
    </div>
    <transition :name="isInfosMode ? 'slide-reverse' : 'slide'">
      <div key="details" v-if="!isInfosMode" class="card-body">
        <tree-loader v-if="loading" />
        <template v-else>
          <div class="card-text">
            <template v-for="paragraph in category.description">
              <h3>{{ paragraph.title }}</h3>
              <div v-html="paragraph.textHTML"></div>
            </template>
          </div>
        </template>
      </div>
      <div key="infos-list" v-else class="card-body">
        <category-infos :infos="infos" />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TreeLoader from '../common/loaders/TreeLoader'
import CategoryInfos from './CategoryInfos'

export default {
  name: 'CategoryBody',
  components: { CategoryInfos, TreeLoader },
  props: {
    slug: {
      type: String,
      default: () => ''
    }
  },
  data: () => ({
    imageWrapperClass: { 'card-img-wrapper': true, small: false },
    isInfosMode: false
  }),
  computed: {
    ...mapGetters({
      category: 'infos/subjectDetails',
      infos: 'infos/infosList',
      loading: 'infos/categoryLoading'
    }),
    hasDescription() {
      return this.category.description && this.category.description.length
    }
  },
  mounted() {
    this.$store.dispatch('infos/fetchDetails', this.slug).then(() => {
      if (!this.hasDescription) {
        this.toggleInfos()
      } else {
        this.isInfosMode = false
      }
    })
  },
  methods: {
    toggleInfos() {
      this.isInfosMode = !this.isInfosMode
      if (this.infos.length === 0) {
        this.$store.dispatch('infos/fetchInfosList', this.slug)
      }
    }
  }
}
</script>

<style lang="scss">
.category-body {
  height: 100%;
  border-radius: $border-radius;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(1, 101, 51, 0.2);
  .card-head {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 32px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 2.29%,
      rgba(0, 0, 0, 0.9) 92.88%
    );
    display: flex;
    .card-title {
      text-shadow: 2px 2px 3px rgba(50, 50, 50, 0.75);
      margin-bottom: 0;
    }
  }

  .card-img-wrapper {
    position: relative;
    height: 278px;
    border-radius: 0;
    border-bottom: 5px solid $brand-light;
    .card-img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .card-text {
    max-width: 1140px;
    margin: 0 auto;
    padding: 24px;
    h4 {
      margin: 8px 0 16px;
    }
    p {
      margin-bottom: 32px;
    }
  }
}
</style>
