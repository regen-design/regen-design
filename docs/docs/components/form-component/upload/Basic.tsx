import { Button, Space, Upload } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Upload action={'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'}>
        <Button>上传文件</Button>
      </Upload>
    </Space>
  )
}
