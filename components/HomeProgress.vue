<template>
  <div class="wrap">
    <div class="container">
      <div class="cardo">
        <h4 class="title">Work processes</h4>
        <div class="grid">
          <div class="item">
            <div class="img">
              <img src="@/assets/img/logo/prog-1.svg" alt="" class="pic" />
            </div>
            <p class="name">Strategy</p>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img/logo/prog-2.svg" alt="" class="pic" />
            </div>
            <p class="name">Wireframes</p>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img/logo/prog-3.svg" alt="" class="pic" />
            </div>
            <p class="name">Development</p>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img/logo/prog-4.svg" alt="" class="pic" />
            </div>
            <p class="name">Quality Test</p>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img/logo/prog-5.svg" alt="" class="pic" />
            </div>
            <p class="name">Launch</p>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img/logo/prog-6.svg" alt="" class="pic" />
            </div>
            <p class="name">Maintanace</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoftwarehutHomeProgress',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  background: white;
  padding-bottom: 80px;
  overflow-x: hidden;
}
.cardo {
  background: url(@/assets/img/progress.svg);
  padding: 40px 0 80px 0;
  border: 1px solid #e6e6e6;
  border-radius: 24px;
}
.title {
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
  text-align: center;
  text-transform: uppercase;
  color: #090016;
  margin-bottom: 48px;
  font-family: var(--decor);
}
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: space-between;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.item p {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #090016;
  margin: 0;
  max-width: 240px;
}
.img {
  width: 135px;
  height: 135px;
  position: relative;
}
.pic {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  max-width: none;
  max-height: none;
}
@media screen and (max-width: 1024px) {
  .title {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;
  }
}
</style>
