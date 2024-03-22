import { Button, Form, FormItem, Input, useForm } from '@regen-design/components'

export default function Demo() {
  const [$form] = useForm()
  return (
    <>
      <Form
        form={$form}
        onFinish={e => {
          console.log(e)
        }}
      >
        <FormItem label="Username" name="username" required>
          <Input />
        </FormItem>
      </Form>
      <Button
        onClick={e => {
          e.preventDefault()
          console.log($form.getFieldsValue())
        }}
      >
        提交
      </Button>
    </>
  )
}