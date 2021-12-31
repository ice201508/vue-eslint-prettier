<template>
  <button @click="updateRef">修改</button>
  <div>{{ count }},{{ r1.count }}</div>
  <hr />
  <button @click="updateRef2">修改</button>
  <div>{{ count2 }},{{ r2.count2 }}</div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)
    // reactive 将解包所有深层的 refs，同时维持 ref 的响应性
    const r1 = reactive({ count }) // 响应式转换是“深层”的——它影响所有嵌套 property

    const updateRef = () => {
      count.value += 1
      console.log(count.value === r1.count) // true
    }

    // 将 ref 分配给 reactive property 时，ref 将被自动解包
    const count2 = ref(10)
    const r2 = reactive({ count2: 0 })
    // r2.count2 = count2.value 如果是这样赋值，count2 与 r2 就是独立的，修改一些另一个并不会响应式改变
    r2.count2 = count2

    const updateRef2 = () => {
      count2.value += 1
      console.log(count2.value, r2.count2)
    }

    return {
      count,
      r1,
      updateRef,
      count2,
      r2,
      updateRef2,
    }
  },
})
</script>
