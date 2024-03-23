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
        <FormItem
          label="Username"
          name="username"
          required
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Password"
          name="password"
          required
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input type={'password'} />
        </FormItem>
      </Form>
      <Button
        onClick={e => {
          e.preventDefault()
          $form.submit()
        }}
      >
        提交
      </Button>
    </>
  )
}
