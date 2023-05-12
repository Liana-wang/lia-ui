---
nav:
  title: 介绍
  order: -1
group: 介绍
---

# 简介

[lia-ui]让antd使用更加得心应手，实现业务的快速迭代。其中包含antd所有组件，以及一些高频次自定义业务组件，支持按需打包。支持`typescript`。

## 安装

安装包
```sh
yarn add lia-ui
```

## 使用

### 使用组件
```javascript
import { Button } from 'lia-ui';
import 'lia-ui/dist/ui.min.css';
```

### 按需加载
1、js按需加载：
* lia-ui默认支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入 `import { Button } from 'lia-ui'` 就会有按需加载的效果。

2、样式按需加载：
* 手动引入：
```javascript
import { Button } from 'lia-ui';
import 'lia-ui/es/button/style';
```

* 如果你使用了babel，可以使用`babel-plugin-import`来进行按需加载，加入这个插件后：
```javascript
import { Button } from 'lia-ui';
```

注：`babel-plugin-import`的配置如下
```javascript
{
    plugins: [
        [
            'import',
            {
                libraryName: 'lia-ui',
                style: true,  // or 'css'
                customName: require('lia-ui/utils') // or (name, file) => require('lia-ui/utils')(name, file, 'es'). default 'lib'.
            }
        ]
    ]
}
```
### oem主题色
注意，这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 babel-plugin-import 的 style 属性一起使用。

```javascript
import 'lia-ui/dist/ui.less';
```

可单独创建一个less变量文件，引入这个文件覆盖ui.less里的变量

```
@import 'lia-ui/dist/ui.less';
@import 'your-theme-file.less';
```
#### 部分组件动态主题色

例如Button，Tabs等，可通过引入OemProvider动态设置主题色
```
import { OemProvider } from '@lia-ui'

<OemProvider theme="#2f9959" appName="test">
  <Button type="primary">test</Button>
</OemProvider>
```
