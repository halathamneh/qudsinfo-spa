<template>
  <a :href="item.href" class="service-item">
    <div class="item-text">
      <h3 class="title">{{ item.title }}</h3>
      <p class="description">{{ item.description }}</p>
    </div>
    <div class="item-image">
      <img :src="item.image" :alt="item.title" />
    </div>
  </a>
</template>

<script>
export default {
  name: 'ServiceItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.service-item {
  border: 1px solid $primary-light;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  height: 148px;
  color: #000;
  transition: background 0.3s, transform 0.1s ease-in-out;
  position: relative;
  background: $primary-light;
  background: linear-gradient(
    -110deg,
    rgba($primary-light, 1) 33.33%,
    rgba($white, 1) 33.34%,
    rgba($white, 1) 50%,
    rgba($white, 0) 66.67%
  );
  background-repeat: no-repeat;
  background-position: -100% 0;
  background-size: 220%;
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    background-position: 100% 0;
    color: $white;
    transform: scale(1.15);
    z-index: 9;
    outline: none;
    box-shadow: 0 0 40px rgba(150, 150, 150, 0.75);
    h3 {
      color: inherit;
    }
  }

  .item-text {
    padding: 16px 30px;
  }
  .item-image {
    align-self: flex-end;
    img {
      max-height: 100%;
    }
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    color: $primary-dark;
  }
  p {
    font-size: 12px;
  }
}
</style>
