<template>
  <div class="footer-contact">
    <h3 class="footer-section-title">{{ $t('contact') }}</h3>
    <div v-if="contactItems.phone" class="footer-contact-item">
      <fa :icon="['fas', 'phone-square']" />
      <b>{{ $t('phone') }}</b>
      <a :href="contactItems.phone.href" class="d-block">{{
        contactItems.phone.label
      }}</a>
    </div>
    <div v-if="contactItems.whatsapp" class="footer-contact-item">
      <fa :icon="['fab', 'whatsapp-square']" />
      <b>{{ $t('whatsapp') }}</b>
      <a :href="contactItems.whatsapp.href" class="d-block">{{
        contactItems.phone.label
      }}</a>
    </div>
    <div v-if="contactItems.email" class="footer-contact-item">
      <fa :icon="['fas', 'envelope-square']" />
      <b>{{ $t('email') }}</b>
      <a :href="contactItems.email.href" class="d-block">{{
        contactItems.email.label
      }}</a>
    </div>
  </div>
</template>

<script>
import contactItems from '~/assets/sample-data/contact.json'
export default {
  name: 'FooterContact',
  data: () => ({
    contactItems
  })
}
</script>

<style lang="scss" scoped>
.footer-contact {
  &-item {
    margin: 10px 0 25px;
    font-size: 14px;
    color: $footer-color-secondary;
    &:last-child {
      margin-bottom: 0;
    }
    svg {
      margin-left: 6px;
    }

    a {
      font-size: 16px;
      color: inherit;
    }
  }
  @include media-breakpoint-down(sm) {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 16px;
    &-item {
      padding-right: 16px;
    }
  }
}
</style>
