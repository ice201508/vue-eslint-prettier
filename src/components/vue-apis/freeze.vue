<template>
  <div>
    <button @click="updateObj">ref修改</button>
    <div>{{ o1.name }}</div>
    <div>{{ obj1.name }}</div>
    <div>{{ cloneO1.name }}</div>
  </div>
  <hr />
  <div>
    <button @click="updateMarkRow">markRaw数据修改</button>
    <div>{{ markRawObj.name }}, {{ markRawObj.age }}</div>
    <div>{{ o3.name }}</div>
  </div>
  <hr />
  <div>
    <button @click="updateReadonly">readonly数据修改</button>
    <div>{{ readonlyObj.sku }}</div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  unref,
  isRef,
  toRaw,
  markRaw,
  reactive,
  readonly,
  isProxy,
  isReactive,
  isReadonly,
} from 'vue'
import { cloneDeep } from 'lodash-es'

import type { GoodsInterface } from '@/models/goodsModal'

const obj1: GoodsInterface = {
  id: 1,
  name: 'string',
  sku: 1,
  aa: 1,
}

const o1 = ref<GoodsInterface>(obj1)
const cloneO1 = ref<GoodsInterface>(cloneDeep(obj1))
const reactiveO1 = reactive<GoodsInterface>(obj1)
const o2 = unref(obj1) // 等价于 三元表达式 isRef(o1) ? o1.value : o1
console.log(isRef(o1), isRef(o2))
console.log(o1.value, o2)

const updateObj = () => {
  // 页面上还是会同步修改，因为是同一个对象，同一个内存地址，对象的引用导致同步发生改变
  // 要看到obj1 o1 不同的变化，需要使用深拷贝，再创建一个对象
  // o1.value.name = '修改'
  cloneO1.value.name = '修改clonedeep' // 这个时候cloneO1发生变化，obj1不变，因为obj1 不是响应式的
}

// -----------------toRaw  makeRaw
// toRaw方法来获取该数据被Proxy包装前的原始数据，然后通过对原始数据进行修改，进而可以修改对应的代理对象内部数据。这是通过原始数据修改改变的，并不会触发 UI界面更新
// 反解析， 对于ref是 .value的数据
console.log(
  'toRaw: ',
  toRaw(o1.value),
  toRaw(reactiveO1),
  toRaw(o1.value) === toRaw(reactiveO1)
)

const markRawObj = markRaw({ name: 'zs', age: 23 })
const o3 = reactive(markRawObj)

console.log('markRaw: ', markRawObj, o3)

const updateMarkRow = () => {
  o3.name = 'markRaw'
  markRawObj.name = 'markRaw'
  console.log(o3, markRawObj)
}

// --------------- readonly
const readonlyObj = readonly({ sku: 111 })
const readonlyObj1 = readonly(ref({ sku: 111 }))
const readonlyObj2 = readonly(reactive({ sku: 111 }))

const updateReadonly = () => {
  readonlyObj.sku = 2222
  readonlyObj1.value.sku = 'ref'
  readonlyObj2.sku = 'reactive'
  console.log(readonlyObj, readonlyObj1.value, readonlyObj2)
  console.log(isProxy(o1), isProxy(reactiveO1))
  // isReactive 是否是响应式，不是说是否是reactive定义的
  console.log(
    isReactive(readonlyObj),
    isReactive(readonlyObj1.value),
    isReactive(readonlyObj2),
    isReadonly(readonlyObj),
    isReadonly(readonlyObj1.value),
    isReadonly(readonlyObj2)
  )
}
</script>

<style scoped lang="less"></style>
