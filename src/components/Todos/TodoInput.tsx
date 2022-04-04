import React from 'react'
import { Input } from 'antd'
import { EnterOutlined } from '@ant-design/icons'

type Props = {
  value: string
  onChange: (value: string) => void
  addTodo: (value: string) => void
}

const TodoInput: React.FC<Props> = props => {
  const description = props.value
  const suffix = description ? <EnterOutlined /> : <span />

  const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value)
  }

  const addTodo = () => {
    props.addTodo(description)
  }

  return (
    <div>
      <Input
        allowClear
        placeholder="添加新任务"
        suffix={suffix}
        value={description}
        onChange={onContentChange}
        onPressEnter={() => {
          addTodo()
        }}
      />
    </div>
  )
}

export default TodoInput
