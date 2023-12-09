<template>
  <div class="wrap" id="contacts">
    <div class="container">
      <div class="cardo">
        <div class="brand__wrap">
          <img class="brand" src="@/assets/img/logo/logo.svg" alt="" />
        </div>
        <h4 class="title">Take Control of Your Business</h4>

        <form method="POST" @submit.prevent="sendTelegram" class="wrapper">
          <input
            v-model="number"
            required
            type="number"
            placeholder="Phone number"
          />
          <input v-model="email" required type="email" placeholder="Email" />
          <button type="submit">Submit</button>
        </form>
        <div class="items">
          <div class="item">
            <p class="sup">Phone number</p>
            <a href="tel:+13145371579"> +1 314 537 15 79 </a>
          </div>
          <div class="item">
            <p class="sup">Email</p>
            <a href="mailto:clairdelunedwh@gmail.com"
              >clairdelunedwh@gmail.com</a
            >
          </div>
          <div class="item">
            <p class="sup">Social media</p>
            <div class="socs">
              <a href="#" class="soc">
                <img src="@/assets/img/logo/instagram.svg" alt="" />
              </a>
              <a href="#" class="soc">
                <img src="@/assets/img/logo/youtube.svg" alt="" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/clair-de-lune-inc/"
                class="soc"
              >
                <img src="@/assets/img/logo/linkedin.svg" alt="" />
              </a>
              <a href="#" class="soc">
                <img src="@/assets/img/logo/twitter.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'SoftwarehutHomeForm',

  data() {
    return {
      number: '',
      email: '',

      token: '5930276859:AAHKMmNHnYOM3mhxqUwOLppRH2cVAnCUhQE',
      chatId: '549003478',
    }
  },

  mounted() {},

  methods: {
    sendTelegram() {
      const message = `Phone number: ${this.number}\nEmail: ${this.email}`

      this.$http
        .post(
          `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${message}`
        )
        .then((response) => {
          console.log('Successfully', response)
          this.number = ''
          this.email = ''
          alert('Successfully sent')
        }),
        (error) => {
          console.log(error)
        }
    },
  },
}
</script>

<style scoped>
.wrap {
  padding-bottom: 40px;
}
.cardo {
  border: 1px solid #2a1f3f;
  border-radius: 40px;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  background: url(@/assets/img/form.svg) center no-repeat;
  background-size: cover;
}
.brand {
  margin-bottom: 24px;
}
.title {
  font-weight: 700;
  font-size: 40px;
  line-height: 140%;
  text-align: center;
  text-transform: uppercase;
  font-family: var(--decor);
  margin-bottom: 40px;
}
.wrapper {
  background: #150b22;
  border: 1px solid #2a1f3f;
  border-radius: 58px;
  padding: 8px;
  max-width: 760px;
  margin: 0 auto;
  margin-bottom: 16px;
}
input {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #4a4456;
  padding: 4px 16px;
  min-width: 300px;
}
input:first-child {
  border-right: 1px solid #2a1f3f;
}
button {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  font-family: var(--decor-medium);
  padding: 12px 24px;
  background: radial-gradient(
    81.31% 260.78% at 50% 250.98%,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 32px;
}
.brand {
  max-width: 276px;
}
.brand__wrap {
  display: flex;
  justify-content: center;
}
.items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 760px;
  min-width: 760px;
  margin: 0 auto;
}
.sup {
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: #5d5d5f;
  margin-bottom: 8px;
}
.item a {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: white;
}
.socs {
  display: flex;
  align-items: center;
  gap: 32px;
}
.socs img {
  width: 18px;
}
@media screen and (max-width: 1024px) {
  .items {
    max-width: none;
    min-width: unset !important;
    flex-direction: column;
  }
  .wrapper {
    max-width: unset !important;
    min-width: none;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    padding: 12px;
  }
  input {
    min-width: unset !important;
    background: #150b22;
    border: 1px solid #2a1f3f;
    border-radius: 58px;
    padding: 16px 20px;
    width: 100%;
  }
  .brand {
    width: 132px;
  }
  .title {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }
  button {
    padding: 16px 0;
  }
  .items {
    gap: 12px;
    align-items: flex-start;
  }
}
</style>
