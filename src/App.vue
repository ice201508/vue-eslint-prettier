<template>
  <div class="main" v-bind="{ name: testa }">
    {{ testa }}
  </div>
  <HeaderqQa />
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import HeaderqQa from '@/components/HeaderqQa.vue'
import type { GoodsInterface } from '@/models/goodsModal'

const testa: Ref<string> = ref<string>('测试')
const a: GoodsInterface = {
  id: 1,
  name: 'string',
  sku: 1,
  // aa: 1,
  // ee: 11,
}
console.log(111, a)
</script>

<style></style>
