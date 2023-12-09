<template>
  <div class="wrap" id="industries">
    <div class="container">
      <img src="@/assets/img/industry.svg" alt="" class="top" />
      <h4 class="title">Our industry</h4>
      <div class="grid">
        <div class="item">
          <div class="img">
            <img src="@/assets/img/logo/industry-1.svg" alt="" class="pic" />
          </div>
          <p class="name">Freight Logistics</p>
          <p class="sub">
            2Clicks sizga yuridik va jismoniy shaxslar bilan nasiya savdo va
            o’zaro shar’iy shartnoma Streamline your operations with a database
            tailored to your needs
          </p>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/logo/industry-2.svg" alt="" class="pic" />
          </div>
          <p class="name">Supply chain</p>
          <p class="sub">
            2Clicks sizga yuridik va jismoniy shaxslar bilan nasiya savdo va
            o’zaro shar’iy shartnoma
          </p>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/logo/industry-3.svg" alt="" class="pic" />
          </div>
          <p class="name">Healthcare</p>
          <p class="sub">2Clicks sizga yuridik va jismoniy shaxslar</p>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/logo/industry-4.svg" alt="" class="pic" />
          </div>
          <p class="name">Marketing</p>
          <p class="sub">
            2Clicks sizga yuridik va jismoniy shaxslar bilan nasiya savdo va
            o’zaro shar’iy shartnoma
          </p>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/logo/industry-5.svg" alt="" class="pic" />
          </div>
          <p class="name">Accounting</p>
          <p class="sub">
            2Clicks sizga yuridik va jismoniy shaxslar bilan nasiya savdo va
            o’zaro shar’iy shartnoma Streamline your operations
          </p>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/finance.svg" alt="" class="pic" />
          </div>
          <p class="name">Finance</p>
          <p class="sub">
            2Clicks sizga yuridik va jismoniy shaxslar bilan nasiya savdo va
            o’zaro shar’iy shartnoma Streamline your operations
          </p>
        </div>
      </div>
      <video autoplay loop muted playsinline src="/video.webm"></video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoftwarehutHomeIndustry',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  padding: 320px 0 40px 0;
  position: relative;
}
.top {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
h4 {
  position: relative;
  z-index: 3;
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 40px;
  font-family: var(--decor);
}
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  position: relative;
  z-index: 9;
}
.item {
  background: rgba(5, 1, 25, 0.8);
  border-radius: 24px;
  border: 1px solid #382d4b;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item img {
  margin-bottom: 24px;
  transition: 0.4s;
}
.item:hover img {
  transform: scale(0.9);
}
.name {
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  font-family: var(--decor);
  margin-bottom: 0;
}
.sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #ffffff;
  opacity: 0.5;
  margin: 0;
  display: none;
}
.img {
  display: flex;
  justify-content: center;
}
video {
  width: 100%;
  margin-top: -64px;
}
@media screen and (max-width: 1024px) {
  .title {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: 100px;
  }
  .wrap {
    padding-top: 144px;
  }
}
</style>
