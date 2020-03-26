<template>
  <footer>
    <b-container>
      <b-row>
        <b-col lg="6" sm="12" cols="12" class="mb-4 mb-lg-0">
          <div
            class="footer-brand justify-content-center justify-content-md-start"
          >
            <img src="~/assets/images/logo.png" alt="Logo" />
            <div class="footer-slogan">
              <h3>Qudsinfo.com</h3>
              <span>{{ $t('slogan') }}</span>
            </div>
          </div>
          <social-links
            class="mt-4 justify-content-center justify-content-md-start"
          />
          <div class="copyrights mt-5 d-none d-lg-block">
            <b>{{ $t('copyrights') }} {{ new Date().getFullYear() }}</b>
            <a href="#" class="privacy-policy-link">{{
              $t('privacy policy')
            }}</a>
          </div>
        </b-col>
        <b-col cols="12" sm="4" lg="2">
          <footer-links
            :title="$t('services')"
            :links="servicesLinks"
            class="mx-4 mx-sm-0"
          />
        </b-col>
        <b-col cols="12" sm="4" lg="2" class="footer-links">
          <footer-links
            :title="$t('about')"
            :links="aboutLinks"
            class="mx-4 mx-sm-0"
          />
        </b-col>
        <b-col cols="12" sm="4" lg="2">
          <footer-contact class="mx-4 mx-sm-0" />
        </b-col>
        <b-col cols="12" class="d-block d-lg-none">
          <div class="copyrights mt-5 mx-4 mx-sm-0">
            <b>{{ $t('copyrights') }} {{ new Date().getFullYear() }}</b>
            <a href="#" class="privacy-policy-link">{{
              $t('privacy policy')
            }}</a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import SocialLinks from '../common/SocialLinks'
import FooterLinks from './FooterLinks'
import FooterContact from './FooterContact'
import servicesLinks from '~/static/sample-data/services.json'
import aboutLinks from '~/static/sample-data/about.json'
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
    flex-wrap: wrap;
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
