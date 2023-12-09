<template>
  <div class="wrap" id="services">
    <img src="@/assets/img/light.svg" alt="" class="light" />
    <div class="container mitski">
      <div class="grid">
        <div class="left">
          <div class="cardo">
            <img src="@/assets/img/net.svg" alt="" class="beck" />
            <div class="img">
              <img src="@/assets/img/new/service-1.svg" alt="" />
            </div>
            <div class="content">
              <h4>Custom Database Development Services</h4>
              <p>
                Relies on thorough understanding of organizational needs,
                planning and creating a strategy that involves all aspects of
                data processing within a company
              </p>
            </div>
          </div>
          <div class="cardo">
            <img src="@/assets/img/net.svg" alt="" class="beck" />
            <div class="img">
              <img src="@/assets/img/new/service-3.svg" alt="" />
            </div>
            <div class="content">
              <h4>Data Mining & Transformation</h4>
              <p>
                Converting raw data into a format that facilitates Data Mining
                and retrieval of strategic information.
              </p>
            </div>
          </div>
          <div class="cardo">
            <img src="@/assets/img/net.svg" alt="" class="beck" />
            <div class="img">
              <img class="piece" src="@/assets/img/new/service-4.svg" alt="" />
            </div>
            <div class="content">
              <h4>Data Integration & Migration Services</h4>
              <p>
                Database developers automate data transfers, merging and
                migrating data from various applications, file formats, and
                database management systems.
              </p>
            </div>
          </div>
        </div>
        <div class="mid">
          <h2 class="title">Database Development Services</h2>
          <p class="sub">
            Streamline your operations with a database tailored to your needs
          </p>
          <div class="big">
            <img src="@/assets/img/new/service.svg" alt="" />
          </div>
        </div>
        <div class="right">
          <div class="cardo">
            <img src="@/assets/img/net.svg" alt="" class="beck" />
            <div class="img">
              <img src="@/assets/img/new/service-5.svg" alt="" />
            </div>
            <div class="content">
              <h4>Data Warehouse Consulting</h4>
              <p>
                We assist you in leveraging enterprise data for lasting business
                growth, lower costs, and higher efficiency.
              </p>
            </div>
          </div>
          <div class="cardo">
            <img src="@/assets/img/net.svg" alt="" class="beck" />
            <div class="img">
              <img src="@/assets/img/new/service-6.svg" alt="" />
            </div>
            <div class="content">
              <h4>Data Warehouse Development</h4>
              <p>
                Our data warehousing specialists swiftly pinpoint data sources
                that are applicable to your unique use case and build warehouses
                that power accurate business intelligence.
              </p>
            </div>
          </div>
          <div class="cardo">
            <img src="@/assets/img/net.svg" alt="" class="beck" />
            <div class="img">
              <img src="@/assets/img/new/service-2.svg" alt="" />
            </div>
            <div class="content">
              <h4>Data Warehouse Modernization</h4>
              <p>
                We can modernize your data warehouse infrastructure to
                facilitate agility and the implementation of new technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoftwarehutHomeServices',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  position: relative;
}
.light {
  position: absolute;
  top: -240px;
  left: 50%;
  transform: translateX(-50%);
}
.big img {
  width: 100%;
  height: 566px;
  border-radius: 18px;
}
.title {
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
  margin-bottom: 24px;
}
.left,
.right {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.cardo {
  background: #191337;
  border: 1px solid #63557d;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  height: 100%;
}
.content {
  padding: 16px;
  position: relative;
  z-index: 8;
  position: absolute;
  bottom: 0;
}
.cardo h4 {
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  margin-bottom: 8px;
  font-family: var(--medium);
}
.cardo p {
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  margin: 0;
  color: #9a999b;
}
.grid {
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  gap: 40px;
  position: relative;
  padding: 16px 0;
  min-height: 870px;
}
.grid::after {
  width: 90%;
  height: 100%;
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(10, 5, 35, 0.88);
  backdrop-filter: blur(20px);
  border-radius: 40px;
  z-index: 1;
  border: 1px solid #63557d;
}
.cardo .img {
  overflow: hidden;
  position: absolute;
  display: flex;
  width: 100%;
  min-width: 180px;
  min-height: 180px;
  z-index: 2;
}

.cardo .img img {
  transform: scale(1.1);
  width: 180px;
  transition: 0.4s;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.cardo:hover img {
  transform: scale(1), translateX(-50%);
}
.left,
.mid,
.right {
  position: relative;
  z-index: 3;
}
.beck {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 24px 24px 0 0;
  z-index: 1;
  opacity: 0.7;
}
.mitski {
  max-width: 1760px;
}
.mid {
  padding-top: 72px;
}
.piece {
  max-width: 132px;
}
@media screen and (max-width: 1024px) {
  .light {
    top: -63px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .cardo .img,
  .cardo .content,
  .cardo .img img {
    position: relative !important;
  }
  .cardo {
    height: unset;
  }
  .title {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }
  .sub {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    max-width: 70%;
    margin: 0 auto 32px auto;
  }
  .mid {
    padding-top: 0;
  }
  .big img {
    height: auto;
  }
}
</style>
