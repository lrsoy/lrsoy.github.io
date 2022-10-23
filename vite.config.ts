import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig(() => { // { command, mode }
  return {
    resolve: {
      alias: [
        {
          find: '~',
          replacement: `${resolve(__dirname, 'src')}/`,
        },
      ],
    },
    plugins: [
      vue({
        include: [/\.vue$/],
        reactivityTransform: true,
      }),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
        ],
      }),
      Components({
        extensions: ['vue', 'tsx'],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dirs: ['src/components'],
        directoryAsNamespace: true,
      }),
    ],
  }
})
