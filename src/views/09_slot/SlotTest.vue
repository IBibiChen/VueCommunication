<template>
  <div>
    <h1>slot</h1>

    <Test1>
      <div>
        <pre>大江东去浪淘尽，千古风流人物</pre>
      </div>

      <!-- 具名插槽填充 a -->
      <template v-slot:a>
        <div>我是填充具名插槽 a 位置结构</div>
      </template>

      <!-- 具名插槽填充 b v-slot 指令可以简化为 # -->
      <template #b>
        <div>我是填充具名插槽 b 位置结构</div>
      </template>
    </Test1>


    <Test2 :todos="todos">
      <template v-slot="{ $row, $index }">
        <p :style="{ color: $row.done ? 'green' : 'red' }">
          {{ $row.title }} --- {{ $index }}
        </p>
      </template>
    </Test2>


  </div>
</template>

<script setup lang="ts">
import Test1 from "./Test1.vue";
import Test2 from "./Test2.vue";
// 插槽: 默认插槽、具名插槽、作用域插槽

// 作用域插槽: 就是可以传递数据的插槽，子组件可以将数据回传给父组件
// 父组件可以决定这些回传的数据是以何种结构或者外观在子组件内部去展示！！！

import { ref } from "vue";
// todos 数据
let todos = ref([
  { id: 1, title: "吃饭", done: true },
  { id: 2, title: "睡觉", done: false },
  { id: 3, title: "打豆豆", done: true },
  { id: 4, title: "打游戏", done: false }
]);
</script>

<style scoped>

</style>
