import { Table } from '@regen-design/components'
import { DocsTableProps } from '@regen-design/utils'
export default function Demo({ data }: { data: DocsTableProps }) {
  const { columns, dataSource } = data
  return <Table columns={columns} dataSource={dataSource}></Table>
}
