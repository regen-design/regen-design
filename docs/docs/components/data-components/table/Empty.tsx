import { Table } from '@regen-design/components'

export default function Demo() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ]
  return <Table columns={columns} dataSource={[]} />
}
