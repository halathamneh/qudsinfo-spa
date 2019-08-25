<template>
  <div class="hero-laptop">
    <img class="laptop-clouds" src="~/assets/images/laptop-clouds.svg" alt="" />
    <img class="laptop-self" src="~/assets/images/laptop.svg" alt="" />
    <img
      class="laptop-announcement"
      src="~/assets/images/laptop-announcement.svg"
      alt=""
    />
    <img class="laptop-books" src="~/assets/images/laptop-books.svg" alt="" />
    <img class="laptop-news" src="~/assets/images/laptop-news.svg" alt="" />
    <img class="laptop-video" src="~/assets/images/laptop-video.svg" alt="" />
    <img class="laptop-chat" src="~/assets/images/laptop-chat.svg" alt="" />
  </div>
</template>

<style lang="scss">
.hero-laptop {
  margin-right: auto;
  position: relative;
  width: 357px;
  height: 241px;
  @include media-breakpoint-down('sm') {
    transform: scale(0.7);
  }
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
