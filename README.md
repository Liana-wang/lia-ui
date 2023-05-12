## 介绍
lia-ui让antd使用更加得心应手，实现业务的快速迭代。其中包含antd所有组件，以及一些高频次自定义业务组件，支持按需打包。
支持typescript

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

### 使用图标
```javascript
import { ApplistOutlined, ApplistFilled } from 'lia-ui/icons'

// outlined 为线框风格
// filled 为实底风格
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
