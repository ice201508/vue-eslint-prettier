### 父子孙组件间传值

```
父组件
<TableComVue v-if="viewStatus === 'default'" @update-view="updateView" />
const updateView = (e: string) => {
  viewStatus.value = e
}

子组件(只做中转，不处理实际逻辑)
<ChildBack v-bind="$attrs" />
如果要在js里面打印
setup 语法  import { useSlots, useAttrs } from 'vue'  useAttrs()
普通v3语法  setup(props, {slots, attrs})

孙子组件向外抛出事件
const emits = defineEmits(['updateView'])
const toggleView = (status: string) => {
  emits('updateView', status)
}
```