<template>
  <div class="wrap" id="about">
    <div class="container smaller">
      <h4 class="title">Cloud defvelopment Benefits</h4>
      <p class="sub">Explore the benefits of database developmet services</p>
      <div class="grid">
        <div class="cardo">
          <img src="@/assets/img/logo/ben-1.svg" alt="" />
          <p class="name">Data Integrity</p>
        </div>
        <div class="cardo">
          <img src="@/assets/img/logo/ben-2.svg" alt="" />
          <p class="name">Data Security</p>
        </div>
        <div class="cardo">
          <img src="@/assets/img/logo/ben-3.svg" alt="" />
          <p class="name">Business Intelligence</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoftwarehutHomeBenefits',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  padding: 80px 0;
  background: white;
}
.title {
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
  text-align: center;
  text-transform: uppercase;

  color: #090016;
  font-family: var(--decor);
  margin-bottom: 16px;
}
.sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #5d5d5f;
  margin-bottom: 47px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.cardo {
  background: #fdfcff;
  border-radius: 24px;
  border: 1px solid #e6e6e6;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
}
.name {
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  text-transform: uppercase;
  font-family: var(--decor);
  color: black;
  margin: 0;
}
.container.smaller {
  max-width: 70%;
}
@media screen and (max-width: 1024px) {
  .title {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }
  .container.smaller {
    max-width: unset !important;
  }
  .sub {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
