<template>
  <section :class="{ 'section-hero': true, animate: start }">
    <div class="section-clipped gradient-primary">
      <b-container style="height: 90%;padding-top: 65px">
        <div class="d-flex align-items-center h-100">
          <div>
            <h1>QudsInfo.com</h1>
            <p class="slogan">{{ $t('slogan') }}</p>
          </div>
          <div class="hero-laptop">
            <img class="laptop-clouds" src="/images/laptop-clouds.svg" alt="" />
            <img class="laptop-self" src="/images/laptop.svg" alt="" />
            <img
              class="laptop-announcement"
              src="/images/laptop-announcement.svg"
              alt=""
            />
            <img class="laptop-books" src="/images/laptop-books.svg" alt="" />
            <img class="laptop-news" src="/images/laptop-news.svg" alt="" />
            <img class="laptop-video" src="/images/laptop-video.svg" alt="" />
            <img class="laptop-chat" src="/images/laptop-chat.svg" alt="" />
          </div>
        </div>
      </b-container>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      start: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.start = true
    }, 1000)
  }
}
</script>

<style lang="scss">
.section-hero {
  height: 470px;
  width: 100%;
  filter: drop-shadow(0px 4px 20px rgba(133, 133, 133, 0.75));

  h1 {
    color: #fff;
    margin: 0;
    font-size: 50px;
    font-weight: bold;
    display: block;
  }
  .slogan {
    font-size: 30px;
    color: #c9b4d1;
    margin: 8px 0;
  }
}

.section-clipped {
  clip-path: ellipse(100% 470px at 50% 0%);
  height: 100%;
  width: 100%;
}

.hero-laptop {
  margin-right: auto;
  position: relative;
  width: 357px;
  height: 241px;
  img {
    position: absolute;
    .animate &:not(.laptop-self) {
      transform: none !important;
      opacity: 1 !important;
    }
  }
  .laptop-clouds {
    top: 0;
    opacity: 0;
    transform: scale(0.25);
    transition: all 0.5s ease-in-out;
  }
  .laptop-self {
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }
  .laptop-books {
    top: 1px;
    left: 212px;
    transform: scale(0.5) translate(-10px, 110px) rotate(30deg);
    opacity: 0;
    transition: all 0.5s 0.25s ease-in-out;
  }
  .laptop-news {
    top: 30px;
    left: 13px;
    transform: scale(0.5) translate(110px, 110px) rotate(-70deg);
    opacity: 0;
    transition: all 0.6s 0.4s ease-in-out;
  }
  .laptop-chat {
    top: 70px;
    left: 124px;
    transform: translate(10px, 40px);
    opacity: 0;
    transition: all 1.2s 0.55s ease-in-out;
  }
  .laptop-video {
    top: 173px;
    left: 19px;
    transform: translate(70px, 0px);
    opacity: 0;
    transition: all 0.5s 0.5s ease-in-out;
  }
  .laptop-announcement {
    top: 140px;
    left: 293px;
    transform: translate(-70px, 0px);
    opacity: 0;
    transition: all 0.8s 0.4s ease-in-out;
  }
}
</style>
