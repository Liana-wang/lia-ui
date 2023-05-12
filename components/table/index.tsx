import React from 'react'
import { Table } from 'antd'
import type { TableProps as AntdTableProps } from 'antd/lib/table'
import { useAntdResizableHeader } from '@minko-fe/use-antd-resizable-header'

interface TableProps<RecordType> extends AntdTableProps<RecordType> {
  /**
   * 是否允许伸缩列宽
   */
  resizable?: boolean;
}

const AITable = ({ resizable = true, columns, ...props }: TableProps<any>) => {

  if (resizable) {
    const { components, resizableColumns, tableWidth } = useAntdResizableHeader({
      columns: columns as any,
    })

    return (
      <Table
        columns={resizableColumns}
        components={components}
        scroll={{ x: tableWidth }}
        {...props}
      />
    )
  }

  return (
    <Table
      columns={columns}
      {...props}
    />
  )
}

export default AITable
