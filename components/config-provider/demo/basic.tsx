import React from 'react'
import { Button, Tabs, ConfigProvider, Space } from 'lia-ui'

const App: React.FC = () => (
  <div>
    <ConfigProvider
      appName='test'
      theme='#8e42b5'
      lang='en-us'
    >
      <Space wrap>
        <Button type='primary'>Primary Button</Button>
        <Button type='primary' disabled>Primary Button</Button>
        <Button>Default Button</Button>
        <Button disabled>Default Button</Button>
        <Button type='dashed'>Dashed Button</Button>
        <br />
        <Button type='text'>Text Button</Button>
        <Button type='link'>Link Button</Button>
      </Space>

      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `Tab 1`,
            key: '1',
            children: `Content of Tab Pane 1`,
          },
          {
            label: `Tab 2`,
            key: '2',
            children: `Content of Tab Pane 2`,
          },
          {
            label: `Tab 3`,
            key: '3',
            children: `Content of Tab Pane 3`,
          },
        ]}
      />
    </ConfigProvider>
  </div>
);

export default App;
