import { HomeOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { Link } from 'dumi';
import React from 'react';

export interface NotFoundProps {
  router: {
    push: (pathname: string) => void;
    replace: (pathname: string) => void;
  };
}

const NotFoundPage: React.FC<NotFoundProps> = ({ router }) => {

  return (
    <Result
      status="404"
      title="404"
      subTitle={'你访问的页面貌似不存在？'}
      extra={
        <Link to={'/'}>
          <Button type="primary" icon={<HomeOutlined />}>
            {'返回 Ant Design 首页'}
          </Button>
        </Link>
      }
    />
  );
};

export default NotFoundPage;
