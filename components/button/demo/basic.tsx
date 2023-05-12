import React from 'react'
import { Button, Space } from 'lia-ui'

const App: React.FC = () => (
  <React.Fragment>
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
  </React.Fragment>
);

export default App;
