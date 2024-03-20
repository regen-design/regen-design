import { Form, FormItem, Input, useForm } from '@regen-design/components'

export default function Demo() {
  const [$form] = useForm()
  return (
    <>
      <Form>
        <FormItem label="Username" name="username" required>
          <Input />
        </FormItem>
      </Form>
    </>
  )
}
