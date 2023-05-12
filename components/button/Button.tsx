import * as React from 'react'
import { Button } from 'antd';
import classnamses from 'classnames'
import type { ButtonProps, ButtonType } from 'antd/es/button'
import { getClassName } from '../config-provider/className';

const AIButton = React.forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  const { type = 'default', className = '', ...others } = props;
  const ClassName = getClassName()

  switch (type) {
    case 'primary':
      return <Button type='primary' className={classnamses('as-primary-btn', ClassName.BackgroundColor ? `${ClassName.BackgroundColor} ${className}` : className)} ref={ref as any} {...others} />
    case 'default':
      return <Button type='default' className={classnamses('as-default-btn', className)} ref={ref as any} {...others} />
    default:
      return type ? (
        <Button type={type as ButtonType} className={className} ref={ref as any} {...others} />
      ) : (
        <Button className={className} ref={ref as any} {...others} />
      );
  }
});

export default AIButton
