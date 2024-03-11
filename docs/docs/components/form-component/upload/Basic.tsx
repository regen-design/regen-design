import { Button, Space, Upload } from '@regen-design/components'
import { FileInfoType } from '@regen-design/types'
import { useState } from 'react'

export default function Demo() {
  const [fileList, setFileList] = useState<FileInfoType[]>([])
  console.log(fileList)
  return (
    <Space>
      <Upload
        fileList={fileList}
        action={'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'}
        onChange={(file, fileList) => {
          setFileList(fileList)
        }}
        onRemove={file => {
          setFileList(prev => prev.filter(item => item.uid !== file.uid))
        }}
      >
        <Button>上传文件</Button>
      </Upload>
    </Space>
  )
}
