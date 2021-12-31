<template>
  <button @click="update">修改</button>
  <div>{{ state.foo }},{{ foo }}</div>
  <hr />
  <div>{{ props1 }}, {{ title }}</div>
  <div>{{ x }},{{ y }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef, toRefs } from 'vue'

// toRefs 的使用场景， hooks的返回，结构
function featureUseXY() {
  const status = reactive({
    x: 0,
    y: 0,
  })
  function getXY(event: any) {
    const e = event || window.event
    status.x = e.screenX
    status.y = e.screenY
  }

  window.addEventListener('mousemove', getXY)
  // window.addEventListener('mousemove', getXY)

  return toRefs(status) // hooks的使用场景
}

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const state = reactive({
      foo: 'foo',
      bar: 'bar',
    })

    console.log(context)

    const props1 = toRefs(props)
    // const { title } = props // 不能解构porps， 会失去响应式，直接编译不通过

    // const { foo } = state  通过结构，这个foo就失去了响应式
    const foo = toRef(state, 'foo')

    // 可以在不失去响应性的情况下解构
    const { x, y } = featureUseXY()

    const update = () => {
      state.foo += 'foo'
      console.log(111, props, props1)
    }

    return {
      // title, 这个属性不用导出，自动可以在页面上使用，如果导出了，就重复key了
      state,
      foo,
      update,
      props1,
      x,
      y,
    }
  },
})
</script>
