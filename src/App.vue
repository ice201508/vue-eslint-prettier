<template>
  <!-- <RenderFunctionVue :level="1" />
  <RenderFunctionVue :level="4" /> -->
  <!-- <RenderFunctionVue2 />
  <RenderFunctionVue3 /> -->
  <!-- <VueApiFreeze /> -->
  <!-- <VueApiShadaw /> -->
  <!-- <VueApiRefReactive /> -->
  <button @click="updateProp">app修改</button>
  <!-- <VueApitoRefs :title="title" /> -->
  <VueApiCustomRef />
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'

// import RenderFunctionVue from '@/components/renderFunction.vue'
// import RenderFunctionVue2 from '@/components/rendeFunction2.vue'
// import RenderFunctionVue3 from '@/components/renderFunction3.vue'
import VueApiFreeze from '@/components/vue-apis/freeze.vue'
import VueApiShadaw from '@/components/vue-apis/shadaw.vue'
import VueApiRefReactive from '@/components/vue-apis/ref-reactive.vue'
import VueApitoRefs from '@/components/vue-apis/toRef-s.vue'
import VueApiCustomRef from '@/components/vue-apis/customRef.vue'

const title: Ref<string> = ref('111')
const updateProp = () => {
  title.value += '1'
}
</script>

<style></style>
