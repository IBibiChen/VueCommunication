<template>
  <div class="box">
    <h1>pinia</h1>
    <div class="container">
      <Child1></Child1>
      <Child2></Child2>
    </div>
  </div>
</template>

<script setup lang="ts">
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
// vuex: 集中式管理状态容器，可以实现任意组件之间通信！！！
// 核心概念: state、mutations、actions、getters、modules

// pinia: 集中式管理状态容器，可以实现任意组件之间通信！！！
// 核心概念: state、actions、getters
// pinia 写法: 选项式 API、组合式 API
</script>

<style scoped>
.box {
  width: 600px;
  height: 400px;
  background: skyblue;
}

.container {
  display: flex;
}
</style>