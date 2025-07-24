import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// @ts-ignore
import { resolve } from 'path';
// https://vite.dev/config/
export default defineConfig({
  // 打包相对路径
  base: './',
  server: {
    port: 7777,
    open: true,
    cors: true
    // proxy: {
    //   ...
    // }
  },
  resolve: {
    alias: {
      // @ts-ignore
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [vue()]
});
