<template>
  <renderVNode />
  <jsxVNode />
</template>

<script lang="tsx" setup>
import { h } from 'vue'

const renderVNode = () => h('div', '测试33')
const jsxVNode = () => {
  const test = 'jsx in setup'
  return (
    <div>
      <h2>jsx标题</h2>
      <p>{test}</p>
    </div>
  )
}
</script>
