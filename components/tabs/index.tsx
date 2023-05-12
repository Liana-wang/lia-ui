import React from 'react'
import { Tabs, TabsProps } from 'antd'
import { getClassName } from '../config-provider/className'

const AITabs = ({ className, ...props }: TabsProps) => {
  const ClassName = getClassName()

  return <Tabs className={ClassName.BackgroundColor ? `${ClassName.BackgroundColor} ${className}` : className} {...props} />
}

export default AITabs
