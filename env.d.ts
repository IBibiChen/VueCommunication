/// <reference types="vite/client" />

// 识别 vue 文件
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}