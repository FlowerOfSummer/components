import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import path from 'path'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      packages: path.resolve(__dirname, './packages'),
    },
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown(),
    dts()
  ],
  base: '/components',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,  // 注意，这一句是在less对象中，写在外边不起作用
        modifyVars: { // 在这里进行主题的修改，参考官方配置属性
          '@primary-color': '#1DA57A',
        },
      }
    }
  },
})
