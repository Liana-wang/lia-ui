import React from 'react'
import { Table } from 'lia-ui'

const columns = [
  {
    title: 'Street',
    dataIndex: 'street',
    key: 'street',
    width: 300,
  },
  {
    title: 'Building',
    dataIndex: 'building',
    key: 'building',
    width: 300,
  },
  {
    title: 'Door No.',
    dataIndex: 'number',
    key: 'number',
    width: 0,
  },
]

let data: any[] = [];
for (let i = 0; i < 100; i++) {
  data = [
    ...data,
    {
      key: i,
      name: 'John Brown',
      age: i + 1,
      street: 'Lake Park',
      building: 'C',
      number: 2035,
      companyAddress: 'Lake Street 42',
      companyName: 'SoftLake Co',
      gender: 'M',
    },
  ]
}

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
  />
);

export default App;
