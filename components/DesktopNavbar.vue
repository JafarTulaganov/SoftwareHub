<template>
  <div class="wrap">
    <div class="container">
      <div :class="{ show: openMenu }" class="left">
        <div class="links">
          <!-- <NuxtLink to="/">Block titles</NuxtLink> -->
          <NuxtLink to="/#services">Services</NuxtLink>
          <NuxtLink to="/#solutions">Solutions</NuxtLink>
          <NuxtLink to="/#industries">Industries</NuxtLink>
          <NuxtLink to="/#contacts">Contact us</NuxtLink>
        </div>
      </div>
      <div class="mid">
        <NuxtLink to="/">
          <img src="@/assets/img/logo/logo.svg" alt="" />
        </NuxtLink>
      </div>
      <div class="right">
        <a href="tel:+13145371579"> Get in touch </a>
        <div
          :class="{ x: openMenu }"
          @click="
            {
              openMenu = !openMenu
            }
          "
          class="burger"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoftwarehutDesktopNavbar',

  data() {
    return {
      openMenu: false,
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  padding: 32px 0;
  background: rgba(9, 0, 22, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(20px);
}
.container {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
}
.left {
  display: flex;
  align-items: center;
  gap: 120px;
}
.links {
  display: flex;
  align-items: center;
  gap: 40px;
}
.links a {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: white;
}
.links a:hover,
.right a:hover {
  text-decoration: none;
}
.right a {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  background: radial-gradient(
    81.31% 260.78% at 50% 250.98%,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 32px;
  padding: 12px 26px;
  color: white;
  text-transform: uppercase;
  font-family: var(--decor-medium);
}
.mid {
  display: flex;
  justify-content: center;
}
.right {
  display: flex;
  justify-content: flex-end;
}
.burger {
  display: none;
}
@media screen and (max-width: 1024px) {
  .wrap {
    position: fixed;
    width: 100%;
    z-index: 999;
  }
  .left {
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 100vh;
    background: #090016;
    display: block;
    border-right: 1px solid #63557d;
    transition: 0.4s;
    transform: translateX(-100%);
  }
  .left.show {
    transform: translateX(0);
  }
  .left .links {
    flex-direction: column;
    padding: 32px 0 0 24px;
    align-items: flex-start;
  }
  .left a {
    font-size: 24px;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  .mid img {
    width: 180px;
  }
  .right a {
    display: none;
  }
  .burger {
    display: flex;
    width: 30px;
    height: 2px;
    background: white;
    position: relative;
    transition: 0.4s;
  }
  .burger::after {
    width: 30px;
    height: 2px;
    background: white;
    position: absolute;
    top: 10px;
    left: 0;
    transition: 0.4s;
    content: '';
  }
  .burger::before {
    width: 30px;
    height: 2px;
    background: white;
    position: absolute;
    top: -10px;
    left: 0;
    content: '';
  }
  .x {
    transform: rotate(45deg);
  }
  .x::after {
    transform: rotate(90deg);
    top: 0;
  }
  .x::before {
    display: none;
  }
}
</style>
