<script lang="ts" setup>
import type { MenuProps } from 'ant-design-vue'

const current = ref<string[]>(['study'])
const menus = ref<MenuProps['items']>([
  {
    key: 'study',
    label: '学习',
    title: '学习',
  },
  {
    key: 'problemset',
    label: '题库',
    title: '题库',
  },
  {
    key: 'contest',
    label: '竞赛',
    title: '竞赛',
  },
  {
    key: 'discuss',
    label: '讨论',
    title: '讨论',
  },
])
</script>

<template>
  <nav>
    <Logo />
    <a-menu v-model:selectedKeys="current" mode="horizontal" :items="menus" />
  </nav>
</template>
