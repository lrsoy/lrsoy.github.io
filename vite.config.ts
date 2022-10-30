import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import fs from 'fs-extra'
import Pages from 'vite-plugin-pages'
import matter from 'gray-matter'

import Markdown from 'vite-plugin-vue-markdown'
import Shiki from 'markdown-it-shiki'
import anchor from 'markdown-it-anchor'
import LinkAttributes from 'markdown-it-link-attributes'
import { slugify } from './scripts/slugify'
import TOC from 'markdown-it-table-of-contents'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

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
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'dayjs',
        'dayjs/plugin/localizedFormat',
      ],
    },
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
        reactivityTransform: true,
      }),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
          '@vueuse/head',
        ],
      }),
      Components({
        extensions: ['vue', 'tsx'],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          IconsResolver({
            componentPrefix: '',
          }),
        ],
      }),

      Pages({  // vite-plugin-pages 的配置
        extensions: ['vue', 'md'],
        pagesDir: 'pages',
        extendRoute(route) {
          const path = resolve(__dirname, route.component.slice(1))

          if (!path.includes('projects.md')) {
            const md = fs.readFileSync(path, 'utf-8')
            const { data } = matter(md)
            route.meta = Object.assign(route.meta || {}, { frontmatter: data })
          }

          return route
        },
      }),


      Markdown({
        wrapperComponent: 'post',
        wrapperClasses: 'prose m-auto',
        headEnabled: true,
        markdownItOptions: {
          quotes: '""\'\'',
        },
        markdownItSetup(md) {
          md.use(Shiki, {
            theme: {
              light: 'vitesse-light',
              dark: 'vitesse-dark',
            },
          })
          md.use(anchor, {
            slugify,
            permalink: anchor.permalink.linkInsideHeader({
              symbol: '#',
              renderAttrs: () => ({ 'aria-hidden': 'true' }),
            }),
          })

          md.use(LinkAttributes, {
            matcher: (link: string) => /^https?:\/\//.test(link),
            attrs: {
              target: '_blank',
              rel: 'noopener',
            },
          })

          md.use(TOC, {
            includeLevel: [1, 2, 3, 4, 5, 6],
            slugify,
          })
        },
      }),

      Icons({
        defaultClass: 'inline',
        defaultStyle: 'vertical-align: sub;',
      })

    ],

    build: {
      rollupOptions: {
        onwarn(warning, next) {
          if (warning.code !== 'UNUSED_EXTERNAL_IMPORT')
            next(warning)
        },
      },
    },

    ssgOptions: {
      formatting: 'minify',
      format: 'cjs',
    },

  }
})
