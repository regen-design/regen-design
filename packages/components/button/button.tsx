// @flow
import { FC, useState } from 'react'

export const Button: FC = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        数字:{count}
      </button>
    </div>
  )
}
