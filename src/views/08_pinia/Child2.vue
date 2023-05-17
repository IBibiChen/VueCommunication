<template>
  <div class="child2">
    {{ infoStore.count }}
    <p @click="updateTodo">{{ todoStore.arr }}{{ todoStore.total }}</p>
  </div>
</template>

<script setup lang="ts">
import useInfoStore from "../../store/modules/info";
// 获取小仓库对象
let infoStore = useInfoStore();

// 引入组合式 API 函数仓库
import useTodoStore from "../../store/modules/todo";

let todoStore = useTodoStore();

// 点击 p 段落去修改仓库的数据
const updateTodo = () => {
  todoStore.updateTodo();
};
</script>

<style scoped>
.child2 {
  width: 200px;
  height: 200px;
  background: hotpink;
}
</style>