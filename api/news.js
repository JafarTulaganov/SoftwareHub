/* eslint-disable */

export default {
  async getNews(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/news')
      } else {
        res = await $nuxt.$axios.get('/news')
      }
      return res
    } catch (e) {
      console.log(e)
    }
  },
}
