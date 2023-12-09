<template>
  <div class="wrap">
    <div class="container">
      <h4>
        DATA WAREHOUSE AND DATABASE DEVELOPMENT AND SUPPORT FOR YOUR BUSINESS
      </h4>
      <p>Streamline your operations with a database tailored to your needs</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoftwarehutHomeHero',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  background: url(@/assets/img/hero.png) center no-repeat;
  background-size: cover;
  height: 70vh;
}
.wrap .container {
  background: url(@/assets/img/hero-stars.png) center no-repeat;
  background-size: 80%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 85%;
}

h4 {
  font-weight: 700;
  font-size: 56px;
  line-height: 130%;
  max-width: 1275px;
  text-align: center;
  text-transform: uppercase;
  font-family: var(--decor);
  margin-bottom: 8px;
}
p {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 24px;
  color: #9a999b;
}
a {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  font-family: var(--decor-medium);
  text-transform: uppercase;
  color: white;
  background: radial-gradient(
    76.61% 245.71% at 50% 177.14%,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(8px);
  border-radius: 32px;
  padding: 16px 24px;
}
a:hover {
  text-decoration: none;
}
@media screen and (max-width: 1024px) {
  h4 {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 16px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
  }
}
</style>
