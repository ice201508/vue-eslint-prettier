<template>
  <div class="main" v-bind="{ name: testa }">
    {{ testa }}
  </div>
  <HeaderqQa />
  <!-- <RenderFunctionVue :level="1" />
  <RenderFunctionVue :level="4" /> -->
  <RenderFunctionVue2 />
  <RenderFunctionVue3 />
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'

import HeaderqQa from '@/components/HeaderqQa.vue'
// import RenderFunctionVue from '@/components/renderFunction.vue'
import RenderFunctionVue2 from '@/components/rendeFunction2.vue'
import RenderFunctionVue3 from '@/components/renderFunction3.vue'
import type { GoodsInterface } from '@/models/goodsModal'

const testa: Ref<string> = ref<string>('测试')
const a: GoodsInterface = {
  id: 1,
  name: 'string',
  sku: 1,
  aa: 1,
  // ee: 11,
}
console.log(111, a)
</script>

<style></style>
