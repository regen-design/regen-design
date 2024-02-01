import { parse } from 'comment-parser'

export type DocsTableProps = {
  dataSource: { name: string; description: string; type: string; default: string }[]
  columns: { title: string; dataIndex: string }[]
}
export const generateDocs = (content: string = '') => {
  const parsedComments = parse(content)
  const dataSource = parsedComments.map(comment => {
    return comment.tags.reduce((acc, tag) => {
      let key = 'name'
      if (tag.tag === 'description') {
        key = 'description'
      }
      if (tag.tag === 'params') {
        key = 'type'
      }
      return {
        ...acc,
        [tag.tag]: tag[key],
      }
    }, {})
  })
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '类型',
      dataIndex: 'params',
    },
    {
      title: '默认值',
      dataIndex: 'default',
    },
    {
      title: '描述',
      dataIndex: 'description',
    },
  ]
  return {
    dataSource,
    columns,
  }
}
