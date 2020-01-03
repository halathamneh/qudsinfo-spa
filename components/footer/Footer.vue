<template>
  <footer>
    <b-container>
      <b-row>
        <b-col cols="6">
          <div class="footer-brand">
            <img src="~/assets/images/logo.png" alt="Logo" />
            <div class="footer-slogan">
              <h3>Qudsinfo.com</h3>
              <span>{{ $t('slogan') }}</span>
            </div>
          </div>
          <social-links class="mt-4" />
          <div class="copyrights mt-5">
            <b>{{ $t('copyrights') }} {{ new Date().getFullYear() }}</b>
            <a href="#" class="privacy-policy-link">{{
              $t('privacy policy')
            }}</a>
          </div>
        </b-col>
        <b-col>
          <footer-links :title="$t('services')" :links="servicesLinks" />
        </b-col>
        <b-col class="footer-links">
          <footer-links :title="$t('about')" :links="aboutLinks" />
        </b-col>
        <b-col>
          <footer-contact />
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import SocialLinks from '../common/SocialLinks'
import FooterLinks from './FooterLinks'
import FooterContact from './FooterContact'
import servicesLinks from '~/assets/sample-data/services.json'
import aboutLinks from '~/assets/sample-data/about.json'
export default {
  name: 'Footer',
  components: { FooterContact, FooterLinks, SocialLinks },
  data: () => ({
    servicesLinks,
    aboutLinks
  })
}
</script>

<style lang="scss">
footer {
  background-color: $footer-bg;
  color: $footer-color;
  padding-top: 80px;
  padding-bottom: 40px;
}
.footer {
  &-brand {
    display: flex;
    align-items: center;
    h3 {
      font-size: 28px;
    }
  }
  &-slogan {
    h3 {
      font-size: 28px;
      font-weight: bold;
      margin: 16px 0 0;
    }
  }
  &-section-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 0;
    padding-bottom: 16px;
    color: inherit;
  }
}
.copyrights {
  margin-right: 20px;
  font-size: 12px;
  > * {
    display: block;
  }
  a {
    color: inherit;
  }
}
</style>
