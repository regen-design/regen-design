import { Button, Form, FormItem, Input, useForm } from '@regen-design/components'

export default function Demo() {
  const [$form] = useForm()
  return (
    <>
      <Form
        form={$form}
        inline
        onFinish={e => {
          console.log(e)
        }}
      >
        <FormItem label="Username" name="username" required rules={[{ required: true }]}>
          <Input clearable />
        </FormItem>
        <FormItem label="Password" name="password" required rules={[{ required: true }]}>
          <Input type={'password'} suffix={<span>元</span>} />
        </FormItem>
        <Button htmlType="submit">Submit</Button>
      </Form>
    </>
  )
}
