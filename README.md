# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript
in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the
[script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) +
  [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are
shimmed to be a generic Vue component type by default. In most cases this is
fine if you don't really care about component prop types outside of templates.
However, if you wish to get actual prop types in `.vue` imports (for example to
get props validation when using manual `h(...)` calls), you can enable Volar's
`.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from
VSCode command palette.

## 项目基本配置

```
1. npm init vite@latest vue3-ts -- --template vue-ts

2. npm install eslint-plugin-import eslint-import-resolver-alias -D
让项目可以使用 @ 别名

3. 校验周边库
npm install eslint eslint-plugin-vue typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier  @types/eslint @types/node -D

eslint: ESLint的核心代码
@typescript-eslint/parser：ESLint的解析器，用于解析typescript，从而检查和规范Typescript代码
@typescript-eslint/eslint-plugin：这是一个ESLint插件，包含了各类定义好的检测Typescript代码的规范
eslint-plugin-import eslint-import-resolver-alias  这两个库是让我们可以import的时候使用 @ 别名的

类型审核相关文件
@types/eslint @types/node

4. 创建一系列文件
settings.json
.prettierrc.js  .prettierignore
.eslintrc.js
.gitignore
修改 vite.config.js

5. commit校验
husky 实现了在提交前对代码进行检查
lint-staged的作用就是对暂存区的文件执行lint，可以让我们每次提交时只校验自己修改的文件
npx husky-init && npm install
增加几个script 命令

npx mrm@2 lint-staged
"lint-staged": {
  "*.{js,jsx,vue,ts,tsx}": [
    "npm run lint"
  ]
}

6.git commit的注释规范
npm install --save-dev @commitlint/{config-conventional,cli}
增加文件 commitlint.config.js
```

## 一些问题

```
1. 不能使用命名空间当做类型

import { GoodsInterface } from '@/models/goodsModal'

也可以这样些
import type { GoodsInterface } from '@/models/goodsModal'

不需要添加 .ts后缀，不然就报错
```

### 渲染函数

[vue JSX](https://github.com/vuejs/jsx-next/blob/dev/packages/babel-plugin-jsx/README-zh_CN.md)

```
使用jsx来写模板  不需要 babel.config.js，官网步骤不对

npm install @vitejs/plugin-vue-jsx -D
vite.config.js 里面添加
import vueJsx from '@vitejs/plugin-vue-jsx'
plugin 字段里面加入  vueJsx()
在script标签上面写上 lang="tsx"
```
