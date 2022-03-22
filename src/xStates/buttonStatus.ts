import { createMachine, assign } from 'xstate'
import { getMenuList } from '@/utils/index.ts'

// This machine is completely decoupled from Vue
// eslint-disable-next-line import/prefer-default-export
export const buttonStatus = createMachine({
  id: 'buttonStatus',
  context: {
    id: 3,
    user: undefined,
  },
  initial: 'enabled',
  states: {
    // 按钮定义两个状态
    enabled: {
      // 在 enabled 状态下，细化了状态，分离出 normal 及 loading 两种子状态，于是 loading 与 enabled 间的从属关系一目了然, 不在混乱
      initial: 'normal',
      states: {
        normal: {
          on: {
            CLICKABC: {
              // 类似于事件名称，任意起 CLICKABC
              // CLICK 事件发生时，切换至 loading 状态
              target: 'loading',
            },
          },
          // initial: 'red',
          // states: {
          //   red: {},
          //   yellow: {},
          //   blue: {},
          // },
        },
        loading: {
          // 涉及到异步的用 invoke属性
          invoke: {
            id: 'fetchData',
            src: async (context, event) => {
              const result = await getMenuList(context.id)
              console.log(444, result)
            },
            onDone: {
              target: 'normal',
              // actions: assign({ user: (context, event) => event.data }),
              // actions: assign({
              //   // 获取到数据后调用 XState.assign 将数据存入 context.list
              //   time: (context, event) => event.data,
              // }),
            },
            onError: {
              target: 'normal',
            },
          },
        },
      },
    },
    diabled: {},
  },
})
