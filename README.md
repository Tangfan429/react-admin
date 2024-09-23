## ✨ 简介

使用`React18`,`Typescript`,`Vite`,`Antd5.0`等主流技术开发的开箱即用的中后台前端项目，`Vite`实现自动生成路由，支持`KeepAlive`功能，`zustand`状态管理，支持虚拟滚动表格，`UnoCss`开发样式。

## 💻 安装使用

- 安装全局依赖依赖，存在则不用安装

```bash
npm i -g pnpm
```

- 安装依赖

```bash
pnpm install
```

##### 如果使用 pnpm 安装依赖出现安装失败问题，请使用梯子或 yarn 安装。

- 运行

```bash
pnpm dev
```

- 打包

```bash
pnpm build
```

## 🧩 图标(iconify)

- 参考 [iconify 官方地址](https://icon-sets.iconify.design/)
- VS Code 安装 Iconify IntelliSense - 图标内联显示和自动补全

## 🎗️ Git 提交示例

### Git 提交不规范会导致无法提交，`feat`关键字可以按照下面`Git 贡献提交规范`来替换。

```
git add .
git commit -m "feat: 新增功能"
git push
```

### 按照以上规范依旧无法提交代码，请在终端执行`npx husky install`之后重新提交。

## 🎯 Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

## 🐵 关于封装

1. 功能扩展，在原有的 api 上拓展。
2. 功能整合，合并两个或两个以上组件的 api。
3. 样式统一，避免后期样式变动，导致牵一发而动全身。
4. 公共组件二次封装或常用组件使用**Base**开头，便于区分。

## 📕 Q&A 常见问题

#### 页面权限如何配置？

1. 通过登录接(/login/v2)或重新授权接口(/authority/user/refresh-permissions/v2)获取 permissions 权限数据。
2. 通过菜单接口(/menu/list/v3)获取 data 中的 rule 权限数据，这个 rule 数据影响菜单显示，如果没返回 rule 则一直都显示。
3. 页面内权限参考 src/pages/system/menu.index.tsx 文件内的 pagePermission 数据，pagePermission.page 是显示页面的权限，根据第一点返回的 permissions 进行匹配。

#### 路由如何配置？

路由根据文件夹路径自动生成，路径包含以下文件名或文件夹名称则不生成：

- components
- utils
- lib
- hooks
- model.tsx
- 404.tsx

可自行在 src/router/utils/config.ts 修改路由生成规则。

#### 菜单如何配置？

提供了两种方式配置菜单：

1. 动态菜单，通过菜单接口(/menu/list/v3)获取菜单数据。
2. 静态菜单，需要静态菜单将 useCommonStore 中的 menuList 改为 defaultMenus

```js
// src/hooks/useCommonStore.ts
import { defaultMenus } from '@/menus'

// const menuList = useMenuStore(state => state.menuList);
// 菜单数据
const menuList = defaultMenus
```
