---
nav:
  title: For Developer
  order: -1
group:
  title: 介绍
  order: -1
---

## 目录介绍
|-- ui
    |-- .dumi        // 在线文档配置目录
    |-- components     // 封装的组件
    |-- dist      // UMD模块系统打包产物
    |-- es       // es module模块系统打包产物
    |-- lib      // commonjs模块系统打包产物
    |-- utils     // 导出的工具库
    |-- _site     // 在线文档app打包产物
    |-- .dumirc.ts   // 在线文档配置文件
    |-- getBabelConfig.js      // babel配置，在webpack和gulp中使用
    |-- gulpfile.js      // gulp生成es和lib
    |-- index-style-only.js      // 获取components中所有的less文件
    |-- index.js      // webpack入口文件


## 安装依赖
```sh
npm install
```

## 启动在线文档
```sh
yarn start
```

## 新增组件
```sh
1、在components下新增组件目录
  为了更好的实现babel-plugins-import按需加载，规定组件目录命名规则：
    组件名称为Pascal命名法，仅一个单词时（Button），则目录为全小写（button）；组合单词时（DatePicker），则目录为-连接（date-picker）
2、组件目录下添加style目录，添加index.ts将less文件导入。
2、在components/index.ts中导出
3、给组件添加文档说明：
  |-- 组件目录
    |-- README.md 组件描述
    |-- demo  组件demo
```

## 新增icons
```sh
1、在components/icons/svg里添加svg文件
2、在components/icons/下，使用@ant-design/icons的Icon封装

注：outlined 为线框风格，filled 为实底风格，colored 为彩色风格
```

## 发布前打包
```sh
yarn prepub
```
