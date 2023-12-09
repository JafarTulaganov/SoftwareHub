<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">Our technical Expertise</h4>
      <p class="sub">
        We use the following ironclad technical expertise for database
        development which plays a pivotal role.
      </p>
    </div>

    <div ref="swiper" class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/img/partners/part-1.svg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/partners/part-2.svg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/partners/part-3.svg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/partners/part-4.svg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/partners/part-5.svg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/partners/part-6.svg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/partners/part-7.svg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/partners/part-8.svg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/partners/part-9.svg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/partners/part-10.svg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/partners/part-11.svg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/partners/part-12.svg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/partners/part-13.svg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/partners/part-14.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  mounted() {
    let swiper = new Swiper(this.$refs.swiper, {
      slidesPerView: 3,
      spaceBetween: 32,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 30000,
      allowTouchMove: false,
      breakpoints: {
        1024: {
          slidesPerView: 8.5,
          spaceBetween: 100,
        },
      },
    })
  },
}
</script>

<style scoped>
.wrap {
  padding: 80px 0 120px 0;
  background: url(@/assets/img/partners.svg) center no-repeat;
  background-size: cover;
}

.title {
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 16px;
  font-family: var(--decor);
}
.sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #9a999b;
  max-width: 580px;
  margin: 0 auto 72px auto;
}

.swiper-slide img {
  opacity: 0.7;
}
@media screen and (max-width: 1024px) {
  .title {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }
  .sub {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    margin-bottom: 32px;
  }
}
</style>
