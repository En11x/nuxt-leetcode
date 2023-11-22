// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@unocss/nuxt', '@nuxtjs/color-mode', '@ant-design-vue/nuxt'],
  antd: {},
  colorMode: {
    preference: 'system', // 设置首选项为系统主题
    fallback: 'light', // 如果无法检测到系统主题，则使用默认的浅色主题
    classSuffix: '',
  },
})
