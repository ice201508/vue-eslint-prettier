<script lang="tsx">
import { h, reactive } from 'vue'

export default {
  // eslint-disable-next-line no-unused-vars
  setup(props, { slots, attrs, emit }) {
    console.log(props, slots, attrs, emit)
    const state = reactive({
      count: 0,
    })

    function increment() {
      // eslint-disable-next-line no-plusplus
      state.count++
    }

    // 返回渲染函数
    return () =>
      h(
        'div',
        {
          onClick: increment,
        },
        state.count
      )
  },
}
</script>
