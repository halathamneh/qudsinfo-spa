<template>
  <ul class="social-icons">
    <li v-show="socialLinks.facebook" class="social-icons-item facebook">
      <a :href="socialLinks.facebook"><facebook /></a>
    </li>
    <li v-show="socialLinks.instagram" class="social-icons-item instagram">
      <a :href="socialLinks.instagram"><instagram /></a>
    </li>
    <li v-show="socialLinks.twitter" class="social-icons-item twitter">
      <a :href="socialLinks.twitter"><twitter /></a>
    </li>
    <li v-show="socialLinks.whatsapp" class="social-icons-item whatsapp">
      <a :href="socialLinks.whatsapp"><whats-app /></a>
    </li>
    <li v-show="socialLinks.snapchat" class="social-icons-item >">
      <a :href="socialLinks.snapchat"><snap-chat /></a>
    </li>
    <li v-show="socialLinks.messenger" class="social-icons-item messenger">
      <a :href="socialLinks.messenger"><messenger /></a>
    </li>
    <li v-show="socialLinks.youtube" class="social-icons-item youtube">
      <a :href="socialLinks.youtube"><youtube /></a>
    </li>
    <li v-show="socialLinks.askfm" class="social-icons-item askfm">
      <a :href="socialLinks.askfm"><ask-fm /></a>
    </li>
    <li v-show="socialLinks.soundcloud" class="social-icons-item soundcloud">
      <a :href="socialLinks.soundcloud"><sound-cloud /></a>
    </li>
  </ul>
</template>

<script>
import {
  AskFm,
  Facebook,
  Instagram,
  Messenger,
  SnapChat,
  SoundCloud,
  Twitter,
  WhatsApp,
  Youtube
} from '../Icons'
import socialLinks from '~/static/sample-data/social-links.json'
export default {
  name: 'SocialLinks',
  components: {
    Facebook,
    AskFm,
    Instagram,
    Messenger,
    SnapChat,
    SoundCloud,
    Twitter,
    WhatsApp,
    Youtube
  },
  data: () => ({
    socialLinks
  })
}
</script>

<style lang="scss" scoped>
.social-icons {
  list-style: none;
  display: flex;
  margin-right: 20px;
  padding: 0;
  flex-wrap: wrap;
  &-item {
    margin: 0 4px;
    svg {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
