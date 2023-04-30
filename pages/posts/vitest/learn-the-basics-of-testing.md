---
title: 学习单元测试-Vitest 基础以及调试技巧
date: 2023-04-30
---

[[toc]]

## 一、手动与自动化测试的关系



## 二、前期准备工作



## 三、Vitest核心API

1. test与it

```js
// 区别
1. 从功能上没有任何的区别
2. it 来自于BDD(行为驱动开发)，在TDD的基础之上，进行延伸和扩展，要求开发人员在书写测试时候按照以下方式描述测试行为
   it should xxx xxx
3. test 来自于Jest框架，
```

2. describe

```js
// 作用
1. describe 测试套件，用于将相关的测试组合在一起，当一个功能有多个测试的点，可以将他们组合在一起，把相同的行为测试组合在一起。
例子： 
describe('',() =>{
    it('',() =>{});
    it('',() =>{});
})

2. 可以控制这一组测试是不是需要跳过等等
describe.skip('',() =>{}) // 表示跳过当前这一组测试，不执行
describe.only('',() =>{}) // 只执行当前测试套件里面的内容，不执行其他套件里面的内容

3. describe 可以进行嵌套使用，但是嵌套的层数最多3层，再多就可能是测试代码组织有问题。
```

3. expect断言

```js
// 常用的实例
1. toBe 相当于全等的概念，expect(1)里面的值是否全等(===)toBe(1)里面的内容
it('toBe',() =>{
    expect(1).toBe(1);
})

2. toEqual 常用于两个对象之间的比较
it('toEqual',() =>{
    const User = {
        name:'小红'
    }
    expect(User).toEqual({
        name: '小红'
    })
})

3. toBeTruthy与toBeFalsy 常用于检测数据返回的是不是真(假)，返回的内容不关心
it('',() =>{
    expect(1).toBeTruthy();
    expect(1).toBeFalsy();
})

4. toContain 检测数组或者是字符串(string) 里面是否包含某一个值
it('toContain',() =>{
    expect('<div>1234</div>').toContain('1234');
})

5. toThrow 检测函数会不会抛出错误
it('toThrow',() =>{
    function getName(name){
        if(typeof name === 'string') {
           throw new Error("错误的name")
        }
        return 'hei'
    }
    
    expect(() =>{ // 测试函数比较特殊，需要传递函数在函数里面进行调用
        getName(1111)
    }).toThrow()
})

```

* Vitest expect - [相关API配置](https://cn.vitest.dev/api/expect.html)

4. setup & teardown

```js
import { beforeEach,beforeAll,afterEach,afterAll } from 'vitest'

1. 他们执行的顺序
beforeEach：在一个测试开始之前执行（和每一个测试kas 相关的，简单点就是和每一个 it 相关的）
beforeAll: 在所有测试之前执行，在一开始的时候，只执行一次
afterEach：在一个 it 或者是 test 执行完毕执行
afterAll：在所有 it 或者是 所有的test 执行完毕执行，只执行一次
// 例子：
beforeAll(() =>{
    console.log('在所有 it / test 之前进行执行')
    // 特殊性，可以直接return一个函数，此函数就代表了afterAll,与正常书写执行顺序是相同的
    return () =>{ //afterAll
       console.log('afterAll')
    }
})
beforeEach(() =>{
    console.log('在每一个it / test 之前进行调用')
    // 特殊性，可以直接return一个函数，此函数就代表了afterEach,与正常书写执行顺序是相同的
    return () =>{ //afterEach
       console.log('afterEach')
    }
})
test("",() =>{
    console.log('1')
})
afterEach(() =>{
    console.log('在每一个it / test 结束后进行调用')
})
afterAll(() =>{
    console.log('在所有 it / test 之后进行执行')
})
```

5. filter 过滤器(筛选想要执行的测试或者是不想要执行的测试)

## 四、相关插件的安装( 针对Vscode)

1. Vitest Snippets 快速生成模板
2. Vitest Runner
3. Jest Sbippets（推荐安装）
4. Jest Runner（推荐安装）