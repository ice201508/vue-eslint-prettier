<template>
  <button @click="send('TOGGLE')">
    {{ state.value === 'inactive' ? '聚焦' : '失去焦点' }}
  </button>
  <hr />
  <button @click="fetchData">外部文件</button>
</template>

<script lang="ts" setup>
import { useMachine } from '@xstate/vue'
import { createMachine, interpret } from 'xstate'
import { buttonStatus } from '@/xStates/buttonStatus.ts'

const toggleMachine = createMachine({
  id: 'toggle', // 状态机标识
  initial: 'inactive', // 这个就是状态的初始值
  states: {
    // 下面就是这个状态下所有值的分布情况
    inactive: {
      on: { TOGGLE: 'active' },
    },
    active: {
      on: { TOGGLE: 'inactive' },
    },
  },
})

const { state, send } = useMachine(toggleMachine)

const btnMachineService = interpret(buttonStatus)
btnMachineService
  .onTransition((stateParam) => {
    // 状态改变执行此函数
    console.log('修改: ', stateParam)
  })
  .start()

const fetchData = () => {
  btnMachineService.send('CLICKABC')
}

// console.log('00', buttonStatus)

// var isLoading = false
// document
//   .getElementById('fetchUserButton')
//   .addEventListener('click', function () {
//     if (isLoading) return // 你已经点击过了，且请求尚未完成，请再等等
//     isLoading = true
//     window.fetch(userApi).then(
//       () => {
//         isLoading = false // 请求结束，重置 isLoading
//       },
//       () => {
//         isLoading = false // 请求结束，重置 isLoading
//       }
//     )
//   })
</script>

<style scoped lang="less"></style>
