---
title: "测试"
# display: Notes
# date: 2021-05-19T16:00:00.000+00:00
# subtitle: Demostractions for projects I am working on from Tweets
# description: Demostractions for projects I am working on from Tweets
---
[[toc]]
## 还是以官方文档为标准 :grinning:
[vue3 渲染函数 具体位置](https://v3.cn.vuejs.org/guide/render-function.html#dom-%E6%A0%91)
## h()函数的参数:官网
```javascript
h(
  // {String | Object | Function} tag
  // 一个 html 标签名、一个组件、一个异步组件、或 一个函数式组件
  // 必填
  'div',

  // {Object} props
  // 与 attribute、prop 和事件相对应的对象。这会在模板中用到。
  // 可选的。
  {} || null,

  // {String | Array | Object} children
  // 子 VNodes, 使用 `h()` 构建,
  // 或使用字符串获取 "文本 VNode" 或者有插槽的对象。
  // 可选的。
  [
    'Some text comes first.',
    h('h1', 'A headline')
  ]
)
```
1. h函数的第三个参数传入不同类型分别代表什么
    * 第一个传入**string**，也就是说在这个元素里面没有其他的元素，可以去设置文字，文字会展示在这个元素里面
    * 第二个传入**Array**，代表的是，在当前元素的内部，可能会与很多个元素，通过逗号进行隔开，数组里可以写入多个**h**函数，如果她还会有下一级也是如此
    * 第三个传入**Object**，代表的是，可以设置插槽，具名插槽，以及默认插槽
## v-if与v-for在渲染函数中的使用
1. 由于渲染函数里面时不能使用vue 中的指令的，只要在原生的 JavaScript 中可以轻松完成的操作，Vue 的渲染函数就不会提供专有的替代方法，可以通过**if、三元表达式**完成指令v-if的操作，使用**map**完成v-for指令的操作
### v-if or if / if else / 三元表达式


### v-for or map
1. 普通的循环数组，通过原生js的map方法去代替v-for，循环数据，在使用组件的时候，正常的引入组件使用即可
```javascript
import { h, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'contentlist',
  setup() {
    const arr = ref([
      { id: 0, name: 'html' },
      { id: 1, name: 'CSS3' },
      { id: 2, name: 'javaScript' }
    ])
    return () => {
      return h('ul', null, [
        arr.value.map(item => {
          return h('li', { key: item.id }, item.name)
        })
      ])
    }
  }
})
```
2. 还有另一种情况会使用到循环，就是说有时候你可能希望实现一个组件嵌套组件的使用，也就是说类似于递归组件，又或者是想展示层级关系的组件，可以通过渲染函数去实现
```html
// 父组件
<template>
  <menuChild size="4">
    <h1>你好</h1>
    <menuChild size="4">
      <h2>你好</h2>
    </menuChild>
    <menuChild size="4">
      <h3>你好</h3>
      <h4>你好</h4>
      <menuChild size="4">
        <h5>你好</h5>
        <h6>你好</h6>
      </menuChild>
    </menuChild>
  </menuChild>
</template>
<script setup>
import menuChild from './menusub.javascript'
</script>
<style  lang="scss" scoped>
</style>
```
```javascript
// 子组件
import { h, defineComponent, provide, ref } from 'vue'
import './menusub.css'
export default defineComponent({

  name: 'menuChild',
  setup(props, { slots, attrs }) {
    const slot = slots.default ? slots.default?.() : []
    return () => {
      return h(
        'div',
        null,
        [
          slot.map(item => {
            return h('div', { class: `mt-${attrs.size}` }, item)
          })
        ]
      )
    }
  }
})
```

![Snipaste_2021-12-10_14-27-50.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aca07fd56ea148e58d1344d3adf5f68b~tplv-k3u1fbpfcp-watermark.image?)
## 渲染函数里面的事件(v-on)
1. 渲染函数里面不可以使用指令，所以在渲染函数里面处理事件，需要将 **@** 换成以**on**开头的大驼峰的方式去命名
```javascript
import { h, defineComponent } from 'vue'
export default defineComponent({
  name: 'about',
  setup() {
    const listclick = () => {
      console.log('我被触发了');
    }
    return () => {
      return h('button',{
          onClick: listclick
      },'点击按钮')
    }
  }
})

```
2. 如果在循环渲染数据的时候，需要获取当前列表的数据，然后进行处理
```javascript
import { h, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'contentlist',
  setup() {
    const arr = ref([
      { id: 0, name: 'html' },
      { id: 1, name: 'CSS3' },
      { id: 2, name: 'javaScript' }
    ])
    const childList = (item) => {
      console.log(item);
    }
    return () => {
      return h('ul', null, [
        arr.value.map(item => {
          return h('li', {
            key: item.id,
            onClick: () => childList(item)
          }, item.name)
        })
      ])
    }
  }
})
```
3. 如何获取事件对象，有两种方式可以获取事件对象
    * 默认点击事件，不传递参数，在注册事件的时候，默认会接收到事件对象
    ```javascript
       import { h, defineComponent, ref } from 'vue'
        export default defineComponent({
          name: 'contentlist',
          setup() {
            const arr = ref([
              { id: 0, name: 'html' },
              { id: 1, name: 'CSS3' },
              { id: 2, name: 'javaScript' }
            ])
            const childList = (e) => {
              console.log(e);
            }
            return () => {
              return h('ul', null, [
                arr.value.map(item => {
                  return h('li', {
                    key: item.id,
                    onClick: childList
                  }, item.name)
                })
              ])
            }
          }
        })
    ```
    * 第二中在书写渲染函数的时候，有时候你可能即需要当前行的数据，也要获取事件对象，那在注册事件的时候，就要通过箭头函数的方式去，将事件对象以及当前行数据一同传递
    ```javascript
    import { h, defineComponent, ref } from 'vue'
    export default defineComponent({
      name: 'contentlist',
      setup() {
        const arr = ref([
          { id: 0, name: 'html' },
          { id: 1, name: 'CSS3' },
          { id: 2, name: 'javaScript' }
        ])
        const childList = (e, item) => {
          console.log(e, item);
        }
        return () => {
          return h('ul', null, [
            arr.value.map(item => {
              return h('li', {
                key: item.id,
                onClick: $event => childList($event, item)
              }, item.name)
            })
          ])
        }
      }
    })
    ```
## 组件之间数据传递
### 插槽
在**vue3**里，**slots.default**始终都为函数，在使用的时候需要以调用的形式去使用
#### 默认接收插槽
```html
// 父组件
<template>
  <div>
    <slotscontent>
      <template #default>
        <h1>插槽数据</h1>
      </template>
    </slotscontent>
  </div>
</template>
<script setup>
import slotscontent from './slotscontent'
</script>
```
```javascript
// 渲染函数组件
import { h, defineComponent, provide, ref } from 'vue'
export default defineComponent({
  name: 'slotscontent',
  setup(props, { slots }) {
    return () => {
      return h('div', null, [slots.default?.()])
    }
  }
})
```
#### 具名插槽
父组件设置了 **#title** 组件，子组件接收插槽内容的时候，是需要通过**slots.title()** 拿到父组件传递的元素
```html
<template>
  <div>
    <slotscontent>
      <template #title>
        <h1>具名插槽</h1>
      </template>
    </slotscontent>
  </div>
</template>

<script setup>
import slotscontent from './slotscontent'
</script>
```
```javascript
import { h, defineComponent, provide, ref } from 'vue'

export default defineComponent({
  name: 'slotscontent',
  setup(props, { slots }) {
    return () => {
      return h('div', null, [slots.title?.()])
    }
  }
})
```
#### 同为渲染函数组件设置插槽
同为渲染函数组件的时候，需要注意的是如果子组件通过**slots.default()** 去接收内容，如果父组件调用子组件的时候传入的是**字符串 || 数组**，控制台会有警告。

`Non-function value encountered for default slot. Prefer function slots for better performance.
默认插槽遇到非函数值。更喜欢功能插槽以获得更好的性能。`

为了避免不必要的警告选择对象的方式，去传递插槽内容


```javascript
// 第一层渲染函数组件
import { h, defineComponent } from 'vue'
import slotschild from './slotschild'
export default defineComponent({
  name: 'slotscontent',
  setup(props, { slots }) {
    return () => {
      return h('div', null, [
        slots.title?.(),
        h(slotschild, null,
          {
            default: () => h('h4', null, '同渲染函数组件')
          }
        )
      ])
    }
  }
})
```
如果又很多个具名插槽，就可以根据不同名字，类似上面**default**一样，继续在后面定义，然后在子组件内部通过**slots.** 的方式去获取相应的组件内容
```javascript
//第二层渲染函数组件
import { h, defineComponent} from 'vue'
export default defineComponent({
  name: 'slotschild',
  setup(props, { slots }) {
    return () => {
      return h('h2', null, [slots.default?.()])
    }
  }
})
```

![Snipaste_2021-12-10_16-08-22.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bf0754c1e8814c67bac7b0e77024118e~tplv-k3u1fbpfcp-watermark.image?)

### 父传子
```html
// 父组件
<template>
  <div>
    <slotscontent :title="title">
      <template #title>
        <h1>具名插槽</h1>
      </template>
    </slotscontent>
  </div>
</template>

<script setup>
import slotscontent from './slotscontent'
import { ref } from 'vue'

const title = ref('父组件传递的数据')

</script>
```

```javascript
import { h, defineComponent } from 'vue'
import slotschild from './slotschild'

export default defineComponent({
  name: 'slotscontent',
  props: {
    title: {
      type: String
    }
  },
  setup(props, { slots }) {
    console.log(props)
    return () => {
      return h('div', null, [
        slots.title?.(),
        props.title
      ])
    }
  }
})
```

![Snipaste_2021-12-10_16-31-30.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d6236c73c0c4f5fa4e5d80cc39fcb1b~tplv-k3u1fbpfcp-watermark.image?)

#### 同渲染函数组件的父传子
```javascript
// 父组件
import { h, defineComponent, ref } from 'vue'
import slotschild from './slotschild'

export default defineComponent({
  name: 'slotscontent',
  setup(props, { slots }) {

    const title = ref('同为渲染函数组件的参数传递')

    return () => {
      return h('div', null, [
        slots.title?.(),
        h(slotschild, // 子组件直接可以在h函数的第一个参数使用
          {
            title: title.value // 给子组件传递数据
          },
          {
            default: () => h('h4', null, '同渲染函数组件')
          }
        )
      ])
    }
  }
})
```
```javascript
// 子组件
import { h, defineComponent } from 'vue'
export default defineComponent({
  name: 'slotschild',
  props: { // 子组件通过props去接收数据
    title: {
      type: String
    }
  },
  setup(props, { slots }) {
    console.log(props)
    return () => {                   // 使用父组件传递的数据
      return h('h2', null, `子组件接收：${props.title}`)
    }
  }
})
```

![Snipaste_2021-12-10_16-38-31.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d18a48fc0bd64b5b9a1ef7cec6cac79a~tplv-k3u1fbpfcp-watermark.image?)
### 子传父emit
```javascript
// 子组件
import { h, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'slotscontent',
  emits: ['childchange'], // 子组件发送自定义事件
  setup(props, { slots, emit }) {
    // 通过自定义事件的方式将参数传递父组件
    const txt = ref('自定义事件传递参数') 
    return () => {
      return h('div', null, [
        slots.title?.(),
        h('button', {
          // 注意这里需要使用箭头函数，
          // 否则不是用是不好使的并且是直接调用的
          onClick: () => emit('childchange', txt.value)
        }, '点击按钮触发事件')
      ])
    }
  }
})
```
```html
<template>
  <div>
    <slotscontent  @childchange="childchange"></slotscontent>
  </div>
</template>

<script setup>
import slotscontent from './slotscontent'
import { ref } from 'vue'
const childchange = (value) => { // 接收子组件传递过来的数据
  console.log(value);
}
</script>
```

#### 同渲染函数组件的emit传递
```javascript
// 子组件
import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'slotschild',
  emits: ['carryparameter', 'nocarryparameter'],
  setup(props, { slots, emit }) {
    return () => {
      return [
        h('button', {
          // 传递参数
          onClick: () => emit('carryparameter', 1)
        }, '携带参数'),
        h('button', {
          // 不传递任何参数
          onClick: () => emit('nocarryparameter'),
        }, '不携带参数')
      ]
    }
  }
})
```
```javascript
import { h, defineComponent, ref } from 'vue'
import slotschild from './slotschild'

export default defineComponent({
  name: 'slotscontent',
  setup(props, { slots, emit }) {
    const nums = ref(0)
    const carryparameter = (value) => { // 携带参数
      nums.value = nums.value += value
    }
    const nocarryparameter = () => { // 不携带参数
      console.log('不携带参数');
    }

    return () => {
      return h('div', null, [
        slots.title?.(),
        h(slotschild, {
          // 不携带任何参数接收的方式
          onNocarryparameter: nocarryparameter,
          // 携带参数
          onCarryparameter: (value) => carryparameter(value)
        }),
        h('h1', null, nums.value)
      ])
    }
  }
})
```

![GIF.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/38942184a9044865971b87928338c900~tplv-k3u1fbpfcp-watermark.image?)
### slot的props
1. 如果你足够了解**slots**，在使用的过程中你可给slot设置属性，通过给slot设置属性，可以给父组件传递数据，使用模板的情况下
```html
// 父组件
<menu> <!--子组件-->
    <template #item={ id }> || #item="slotProps" 接收全部
        <p>{{ id }}</p> || <p>{{ slotProps.id }}</p>
    </template>
</menu>


//子组件
<template>
    <slot name="item" :id="id"></slot>
</template>
<script setup>
    import { ref } from 'vue'
    const id = ref(0)
</script>
```

2. 换成渲染函数的方式一次实现

![GIF.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fdee61f272764945ae5385dd1dc1d236~tplv-k3u1fbpfcp-watermark.image?)
```html
// 父组件
<template>
  <div>
    <articleContent :list="list">
      <template #bts="{ id }">
        <button @click="removeList(id)">删除{{ id }}</button>
      </template>
    </articleContent>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import articleContent from './article'
const list = ref([
  { id: 0, name: '第一条数据' },
  { id: 1, name: '第二条数据' },
  { id: 2, name: '第三条数据' },
  { id: 3, name: '第四条数据' }
])
const removeList = (id) => {
  const idx = list.value.findIndex(item => item.id == id);
  list.value.splice(idx, 1);
}
</script>

<style  scoped>
</style>
```
* 子组件在给父祖家通过slot传递数据的时候，在渲染函数里面你需要这么做**slots.bts?.({ id: child.id })**，将参数传递给父组件
* 父组件是模板情况下通过 **<template #bts="{ id }">** 将id值结构的方式拿出来进行使用
* 也可以通过另一种方式将子组件插槽传递的数据拿出来，vue2通过 **$slots**去获取这个值，在vue3中通过**slotProps**拿到子组件所有通过slot传递给父组件的数据，推荐使用解构的方式，获取想要的值
```javascript
// 子组件
import { h, defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    list: {
      type: Array
    }
  },
  name: 'articleContent',
  setup(props, { slots }) {

    return () => {
      return h('ul', null, [
        props.list.map(child => {
          return h('li', { key: child.id }, [
            child.name,
            slots.bts?.({ id: child.id })
          ])
        })
      ])
    }
  }
})
```
#### 同为渲染函数组件的props(slot)
```javascript
// 子组件
import { h, defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'child',
  setup(props, { slots, attrs }) {
    const str = ref('子组件传递的数据')

    return () => {
      return h('div', null, [
        slots.default?.({ str: str.value })
      ])
    }
  }
})
```
**props**里面存储的就是子组件通过slot传递给父组件的所有数据，这个名字不是固定的，可以是**slotProps**，也可以通过结构的方式去拿到想要拿到的值
```javascript
//父组件
import { h, defineComponent } from 'vue'
import child from './child'

export default defineComponent({

  name: 'father',
  setup() {
    return () => {
      return h(child, null, {
        default: (props) => h('h1', null, props.str)
      })
    }
  }
})
```
**官网**：补充一下**attrs**，包含了父作用域中不作为组件 [props](https://v3.cn.vuejs.org/api/options-data.html#props) 或[自定义事件](https://v3.cn.vuejs.org/api/options-data.html#emits)的 attribute 绑定和事件。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定，并且可以通过 `v-bind="$attrs"` 传入内部组件——这在创建高阶的组件时会非常有用
```javascript
// 子组件
import { h, defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'child',
  props: {
    size: {
      type: Number
    }
  },
  setup(props, { slots, attrs }) {
    const str = ref('子组件传递的数据')

    return () => {
      return h('div', null, [
        slots.default?.({ str: str.value }),
        // 子组件通过attrs拿到父组件传递过来的值
        h('span', { class: attrs.class }, '你好')
      ])
    }
  }
})
```
```javascript
//父组件
import { h, defineComponent } from 'vue'
import child from './child'

export default defineComponent({

  name: 'father',
  setup() {
    return () => {
      return h(child, { size: 4, class: 'item' }, {
        default: (slotProps) => h('h1', null, slotProps.str)
      })
    }
  }
})
```

![Snipaste_2021-12-10_19-17-01.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/490134eb523e49589b3e0de7bf4ecace~tplv-k3u1fbpfcp-watermark.image?)

## 补充v-model在render里使用，h里面使用还在探索
```javascript
import { h, defineComponent, ref, defineExpose } from 'vue'
import { ElFormItem, ElForm, ElRadio, ElRadioGroup, ElInput } from 'element-plus'

const TESTQUESTIONS = 'TESTQUESTIONS'
export default defineComponent({
  name: TESTQUESTIONS,
  emits: ["update:modelValue"], // 重点关注
  props: {},
  setup(props, { emit, slots, attrs }) {
    const modelValue = ref('')
    const addChildEvent = () => {
      console.log('aaaa');
    }

    const child = []

    return {
      modelValue,
      addChildEvent,
      child
    }
  },
  render(_ctx) {
  
    // 重点关注
    const element = h(ElInput, {
      modelValue: _ctx.modelValue,
      'onUpdate:modelValue': $event => ((_ctx.modelValue) = $event),
    })
    const Vnode = h('div', null, [element, ..._ctx.child])
    return Vnode
  }
})


```
## 补充v-model在render函数里循环绑定，h函数中还在探索
```javascript

const radioElement = {
  emits: ['onUpdate:modelValue'],
  setup() {
    const formData = ref([
      { id: 0, options: 'a', isChecked: true },
      { id: 1, options: 'b', isChecked: false },
      { id: 2, options: 'c', isChecked: false },
      { id: 3, options: 'd', isChecked: false },
    ])
    const addInput = () => { // 添加输入框
      formData.value.push({
        id: (formData.value.length),
        options: "",
        isCheck: false
      })
    }
    const reduceInput = (item) => { // 减少输入框
      if (formData.value.length <= 1) {
        ElMessage({ type: 'warning', message: '已经是最后一条了' })
      } else {
        const index = formData.value.indexOf(item)
        if (index !== -1) {
          formData.value.splice(index, 1)
        }
      }
    }
    const changeRadioEvent = (index, e) => { // 单选按钮改变事件
      formData.value.forEach(item => {
        item.isChecked = false
      })
      formData.value[index].isChecked = e.target.checked
    }
    return { formData, reduceInput, addInput, changeRadioEvent }
  },
  render(_ctx) {
    const element = [
      _ctx.formData.map((item, index) => {
        return h('div', { class: 'item-input', key: index }, [
          // 重点关注--------
          h(ElInput, { modelValue: item.options, 'onUpdate:modelValue': $event => ((item.options) = $event) }),
          // ---------------
          h(ElIcon, { onClick: () => _ctx.reduceInput(item) }, { default: () => h(Minus) }),
          h('input', { type: 'radio', name: 'options', checked: item.isChecked, onChange: (e) => _ctx.changeRadioEvent(index, e) })
        ])
      })
    ]
    return [element, h('button', { type: 'button', onClick: _ctx.addInput }, '添加选项')]
  }
}
```
## 自定义指令，待学习...

## 内置组件，待学习...

## JSX，待学习 ..