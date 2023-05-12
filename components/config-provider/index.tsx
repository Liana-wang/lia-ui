import React, { useMemo } from 'react'
import { ConfigProvider } from 'antd'
import { ConfigProviderProps } from 'antd/es/config-provider'
import zhCN from 'antd/lib/locale/zh_CN'
import zhTW from 'antd/lib/locale/zh_TW'
import enUS from 'antd/lib/locale/en_US'
import { generate } from '@ant-design/colors'
import { setClassName, getClassName } from './className'

interface IConfigProps extends ConfigProviderProps {
  theme?: string;
  appName?: string;
  lang?: 'zh-cn' | 'zh-tw' | 'en-us';
}

const getLocale = (lang?: string) => {
  if (lang === 'zh-cn') {
    return zhCN
  }
  if (lang === 'zh-tw') {
    return zhTW
  }

  return enUS
}

const AIConfigProvider: React.FC<IConfigProps> = (props) => {
  const { children, prefixCls = 'ant', theme = '#126EE3', appName = 'oneui', lang = 'zh-cn' } = props
  const colorPalette: string[] = useMemo(() => generate(theme), [theme])

  setClassName(appName)

  const ClassName = getClassName()

  return (
    <ConfigProvider locale={getLocale(lang)} {...props}>
      <style type='text/css'>
        {`
          .${ClassName.BackgroundColor}.${prefixCls}-btn-primary {
              background: ${colorPalette[5]} !important;
              color: #ffffff !important;
              border-color: transparent !important;
          }
          .${ClassName.BackgroundColor}.${prefixCls}-btn-primary:hover {
              background: ${colorPalette[4]} !important;
          }
          .${ClassName.BackgroundColor}.${prefixCls}-btn-primary:active {
              background: ${colorPalette[6]} !important;
          }
          .${ClassName.BackgroundColor}.${prefixCls}-btn-primary[disabled],
          .${ClassName.BackgroundColor}.${prefixCls}-btn-primary[disabled]:active,
          .${ClassName.BackgroundColor}.${prefixCls}-btn-primary[disabled]:focus,
          .${ClassName.BackgroundColor}.${prefixCls}-btn-primary[disabled]:hover {
              background: ${colorPalette[3]} !important;
              filter: opacity(50%) !important;
              color: #fff;
              opacity: 1;
          }

          .${ClassName.BackgroundColor} .${prefixCls}-tabs-tab.${prefixCls}-tabs-tab-active .${prefixCls}-tabs-tab-btn {
              color:  ${colorPalette[5]} !important;
          }
          .${ClassName.BackgroundColor} .${prefixCls}-tabs-tab-btn:active,
          .${ClassName.BackgroundColor} .${prefixCls}-tabs-tab-remove:active {
              color:   ${colorPalette[5]} !important;
          }
          .${ClassName.BackgroundColor} .${prefixCls}-tabs-tab:hover {
              color:   ${colorPalette[5]} !important;
          }
          .${ClassName.BackgroundColor} .${prefixCls}-tabs-ink-bar {
              background:  ${colorPalette[5]} !important;
          }
        `}
      </style>
      {children}
    </ConfigProvider>
  )
}

export default AIConfigProvider
