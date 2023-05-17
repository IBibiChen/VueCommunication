<template>
  <div>
    <h1>v-model: 钱数{{ money }}、{{ pageNo }}、{{ pageSize }}</h1>
    <input type="text" v-model="info" />
    <hr>
    <!-- props: 父亲给儿子数据 -->
    <!-- <Child :modelValue="money" @update:modelValue="handler"></Child> -->
    <!-- 
        v-model 组件身上使用
        第一: 相当于给子组件传递 props[modelValue] = 10000
        第二: 相当于给子组件绑定自定义事件 update:modelValue
     -->
    <Child1 v-model="money"></Child1>

    <hr>

    <Child2 v-model:pageNo="pageNo" v-model:pageSize="pageSize"></Child2>
  </div>
</template>

<script setup lang="ts">
// v-model 指令: 收集表单数据，数据双向绑定
// v-model 也可以实现组件之间的通信，实现父子组件数据同步的业务
// 父亲给子组件数据 props
// 子组件给父组件数据 自定义事件

// 引入子组件
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
import { ref } from "vue";

let info = ref("");
// 父组件的数据钱数
let money = ref(10000);
// 自定义事件的回调
const handler = (num) => {
  // 将来接受子组件传递过来的数据
  money.value = num;
};

// 父亲的数据
let pageNo = ref(1);
let pageSize = ref(3);
</script>

<style scoped>

</style>
