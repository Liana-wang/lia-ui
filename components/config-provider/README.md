---
title: ConfigProvider
order: -1
---

## 何时使用

为组件（button，tab）提供一些定制化的主题色

## 代码演示

<code src="./demo/basic.tsx">基本使用</code>

## API

在antd的ConfigProps基础上新增以下参数

| 参数    | 说明                                       | 类型   | 默认值   |
| ------- | ------------------------------------------ | ------ | -------- |
| theme   | 主题色                                     | string | -#8BA7DD |
| appName | 项目名称（用于多个应用同时加载时样式隔离） | string | oneui    |
| lang    | 语言                                       | string | zh-cn    |

## 扩展

给ConfigProvider传入自定义prefixCls和iconPrefixCls后，需配置less变量

1. 引入lia-ui/dist/ui.less并用自定义名称覆盖 @ant-prefix和 @iconfont-css-prefix

```less
// theme-file.less
@import 'lia-ui/dist/ui.less';
@ant-prefix: test-ant;
@iconfont-css-prefix: test-anticon;
```

2. 通过webpack：less-loader更改
```js
{
    loader: 'less-loader',
    options: {
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                '@ant-prefix': 'test-ant',
                '@iconfont-css-prefix': 'test-anticon',
            },
        },
    },
}
```

## Change Log

### 2022-07-08

    -feat ConfigProvider
