<template>
  <button @click="update">修改</button>
  <div>
    {{ text }}
  </div>
</template>

<script lang="ts">
/* eslint-disable arrow-body-style */
import { customRef, defineComponent } from 'vue'

function useDebouncedRef(value: any, delay = 500) {
  let timeout: number
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      },
    }
  })
}

export default defineComponent({
  setup() {
    const text = useDebouncedRef('')
    const update = () => {
      text.value += '1'
      console.log(text.value)
    }
    return {
      text,
      update,
    }
  },
})
</script>

<style scoped lang="less"></style>
