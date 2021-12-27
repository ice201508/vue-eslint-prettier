<template>
  <div class="main" v-bind="{ name: testa }">
    {{ testa }}
  </div>
  <HeaderqQa />
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import HeaderqQa from '@/components/HeaderqQa.vue'

const testa: Ref<string> = ref<string>('测试')
</script>

<style></style>
