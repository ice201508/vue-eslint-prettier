<template>
  <div>
    <button @click="updateShallowReactive">修改shallowReactive</button>
    <div>
      {{ shallowReactiveObj }}
    </div>
  </div>
  <div>
    <button @click="shallowRefUpdate">修改shallowRef</button>
    <div>
      {{ shallowRefObj }}
    </div>
  </div>
</template>

<script lang="ts" setup>
// reactive用来包装一个对象，使其每个对象属性都具有响应性，但是这个包装过程是递归调用的，如果包装的对象有过多属性而又不需要设置相应，无疑是性能浪费
// 针对这种情况vue设置了shallowReactive shallowRef两个方法来包装响应式数据，通过该方法包装的数据只有第一层具有响应性
import { shallowReactive, shallowRef, triggerRef } from 'vue'

const shallowReactiveObj = shallowReactive({
  a: 1,
  b: {
    b1: 2,
    b2: 3,
  },
})

const updateShallowReactive = () => {
  // shallowReactiveObj.a = 11111 // 修改第一层属性会触发响应式，视图会发生变化
  shallowReactiveObj.b.b1 = 22222222 // 修改第二层数据不会触发响应式，视图不会发生改变，只是model数据发生改变
  console.log(shallowReactiveObj)
}

// 修改了对象的第一层属性不会触发视图更新
const shallowRefObj = shallowRef({
  a: 1,
  b: {
    b1: 2,
    b2: 3,
  },
})
const shallowRefUpdate = () => {
  shallowRefObj.value.a = 111111 // 修改第一层的数据就不会触发响应式
  // shallowRef的第一层数据实际指的是包装的整个数据,下面这样修改就会触发响应式
  // shallowRefObj.value = { a: 22, b: { b1: 11, b2: 33 } }
  triggerRef(shallowRefObj) // 手动触发ref更新
  shallowRefObj.value.b.b1 = 2222 // 下面这个也会一起更新页面
  console.log(shallowRefObj.value)
}
</script>
