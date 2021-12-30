<script lang="tsx">
// 多数情况使用模板创建HTML, 少数情况使用渲染函数创建
// import { h } from 'vue'
import { defineComponent } from 'vue'

// 渲染函数
const Demo = defineComponent({
  name: 'RenderFunction',
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  // render() {
  //   const tag = `h${this.$props.level}`
  //   return h(tag, '测试标题')
  // },
  // render() {
  //   return Array.from({ length: 20 }).map(() => h('p', 'hi'))
  // },
  render() {
    const Tag = `h${this.$props.level}`
    return (
      <>
        <Tag>标题</Tag>
        <div>JSX test</div>
        <div>标题</div>
      </>
    )
  },
})

export default Demo

// export default {
//   render() {
//     return h('div', 'eee')
//   },
// }
</script>
