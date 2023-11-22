// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@unocss/nuxt', '@nuxtjs/color-mode', '@ant-design-vue/nuxt'],
  colorMode: {
    classSuffix: '',
  },
  antd: {},
})
