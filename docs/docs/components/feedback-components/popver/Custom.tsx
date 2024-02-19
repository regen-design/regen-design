import { Button, Popover, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Popover
        arrow={false}
        content={
          <div
            style={{
              width: 200,
              height: 200,
              background: 'red',
            }}
          >
            rua~~~
          </div>
        }
        custom
      >
        <Button>悬浮</Button>
      </Popover>
    </Space>
  )
}
