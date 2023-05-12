import React from 'react'
import { Space } from 'lia-ui'
import { ApplistOutlined, ApplistFilled } from 'lia-ui/icons'

const App: React.FC = () => (
  <React.Fragment>
    <h4 style={{ marginTop: 0 }}>线框风格：</h4>
    <Space wrap>
      基本样式：<ApplistOutlined style={{ marginRight: 30 }} />
      color：<ApplistOutlined style={{ color: 'red', marginRight: 30 }} />
      旋转动画：<ApplistOutlined spin style={{ marginRight: 30 }} />
      旋转角度：<ApplistOutlined rotate={220} />
    </Space>
    <h4 style={{ marginTop: 20 }}>实底风格：</h4>
    <Space wrap>
      基本样式：<ApplistFilled style={{ marginRight: 30 }} />
      color：<ApplistFilled style={{ color: 'red', marginRight: 30 }} />
      旋转动画：<ApplistFilled spin style={{ marginRight: 30 }} />
      旋转角度：<ApplistFilled rotate={220} />
    </Space>
  </React.Fragment>
);

export default App;
