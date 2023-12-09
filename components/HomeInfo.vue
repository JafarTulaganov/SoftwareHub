<template>
  <div class="wrap" id="solutions">
    <div class="container">
      <div class="big">
        <img class="" src="@/assets/img/info.svg" alt="" />
      </div>
      <div class="content">
        <h4>Database Development Solution</h4>
        <p class="sub">
          Design and develop a database that answers the needs of your
          organization.
        </p>
        <div class="grid">
          <div class="cardo">
            <img src="@/assets/img/net.svg" alt="" class="beck" />
            <div class="img">
              <img src="@/assets/img/new/saul-7.svg" alt="" />
            </div>
            <div class="content">
              <p>Strategy & Consulting</p>
            </div>
          </div>
          <div class="cardo">
            <img src="@/assets/img/net.svg" alt="" class="beck" />
            <div class="img">
              <img src="@/assets/img/new/saul-5.svg" alt="" />
            </div>
            <div class="content">
              <p>Data Warehouse Development</p>
            </div>
          </div>
          <div class="cardo">
            <img src="@/assets/img/net.svg" alt="" class="beck" />
            <div class="img">
              <img src="@/assets/img/new/saul-6.svg" alt="" />
            </div>
            <div class="content">
              <p>Data Warehouse Optimization Solutions</p>
            </div>
          </div>
          <div class="cardo">
            <img src="@/assets/img/net.svg" alt="" class="beck" />
            <div class="img">
              <img src="@/assets/img/new/saul-4.svg" alt="" />
            </div>
            <div class="content">
              <p>Data Warehouse Migration</p>
            </div>
          </div>
          <div class="cardo">
            <img src="@/assets/img/net.svg" alt="" class="beck" />
            <div class="img">
              <img src="@/assets/img/new/service-1.svg" alt="" />
            </div>
            <div class="content">
              <p>Database Design & Development</p>
            </div>
          </div>
          <div class="cardo">
            <img src="@/assets/img/net.svg" alt="" class="beck" />
            <div class="img">
              <img src="@/assets/img/new/saul-2.svg" alt="" />
            </div>
            <div class="content">
              <p>Database Integration & Migration Services</p>
            </div>
          </div>
          <div class="cardo">
            <img src="@/assets/img/net.svg" alt="" class="beck" />
            <div class="img">
              <img src="@/assets/img/new/saul-3.svg" alt="" />
            </div>
            <div class="content">
              <p>Forms Development & Report Automation</p>
            </div>
          </div>
          <div class="cardo">
            <img src="@/assets/img/net.svg" alt="" class="beck" />
            <div class="img">
              <img src="@/assets/img/new/service-2.svg" alt="" />
            </div>
            <div class="content">
              <p>Database Performance Optimization</p>
            </div>
          </div>
          <div class="cardo">
            <img src="@/assets/img/net.svg" alt="" class="beck" />
            <div class="img">
              <img src="@/assets/img/new/saul-1.svg" alt="" />
            </div>
            <div class="content">
              <p>Debugging & Repair</p>
            </div>
          </div>
        </div>
      </div>
      <img src="@/assets/img/small.svg" alt="" class="small" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoftwarehutHomeInfo',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  padding: 260px 0 220px;
  position: relative;
}
.big {
  position: absolute;
  top: -180px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
.small {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.content {
  position: relative;
  z-index: 9;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
h4 {
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-family: var(--decor);
}
.sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #9a999b;
  margin-bottom: 48px;
}
.cardo {
  background: #050119;
  border-radius: 24px;
  border: 1px solid #63557d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}
.cardo .img {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
}
.cardo .img img {
  width: 250px !important;
  height: 100%;
  min-height: 200px;
}
.cardo .img::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(180deg, rgba(11, 1, 25, 0) 0%, #0b0119 100%);
  z-index: 99;
}
.cardo .img {
  overflow: hidden;
}
.cardo .img img {
  width: 100%;
  transition: 0.4s;
  transform: scale(1.1);
}
.cardo:hover img {
  transform: scale(1);
}
.cardo .content {
  position: relative;
  padding: 32px;
}
.cardo p {
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  font-family: var(--decor-regular);
  margin: 0;
}
.beck {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 50% !important;
  object-fit: cover;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 32px 0;
  }
  h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
  }
  .content {
    padding: 0;
  }
  .sub {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .content p {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
  .cardo .content {
    padding: 0 0 24px 24px;
  }
}
</style>
