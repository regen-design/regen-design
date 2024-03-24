import { Button, Form, FormItem, Input, useForm } from '@regen-design/components'

export default function Demo() {
  const [$form] = useForm()
  return (
    <>
      <Form
        form={$form}
        labelWidth={120}
        onFinish={e => {
          console.log(e)
        }}
      >
        <FormItem label="Username" name="username" required rules={[{ required: true }]}>
          <Input />
        </FormItem>
        <FormItem label="Password" name="password" required rules={[{ required: true }]}>
          <Input type={'password'} />
        </FormItem>
        <Button htmlType="submit">Submit</Button>
      </Form>
    </>
  )
}
