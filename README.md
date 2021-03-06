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
使用jsx来写模板
npm install @vue/babel-plugin-jsx -S
babel.config.js 配置

npm install @vitejs/plugin-vue-jsx -S
vite.config.js 里面添加
import vueJsx from '@vitejs/plugin-vue-jsx'
plugin 字段里面加入  vueJsx()
在script标签上面写上 lang="tsx"
```

### APIS

- **toRaw, makeRaw**

*

### 第三方库

1. **lodash-es**

```
npm install lodash-es @types/lodash-es -D
```

2. **可视化打包结果**

```
npm install rollup-plugin-visualizer -D

vite.config.ts 配置
import { visualizer } from 'rollup-plugin-visualizer';
plugin: [
  visualizer({
    open: false,
    gzipSize: true,
    brotliSize: true,
    // sourcemap: true,
  })
]
```

3. **xstate**

> https://blog.zfanw.com/xstate-state-management/

```
npm install xstate @xstate/vue -S
```
