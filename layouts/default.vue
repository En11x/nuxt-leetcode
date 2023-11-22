<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import { theme } from 'ant-design-vue'

const { darkAlgorithm, defaultAlgorithm } = theme
const isDark = ref<boolean>(false)
onMounted(() => {
  const color = useColorMode()
  isDark.value = color.value === 'dark'
})
</script>

<template>
  <a-config-provider
    :theme="{
      algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
    }"
  >
    <div>
      <Header />
      <slot />
    </div>
  </a-config-provider>
</template>

<style>
.dark{
  color-scheme: dark;
}
</style>
