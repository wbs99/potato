import React, { useState } from 'react'
import TodoInput from './TodoInput'
import todoApi from '../../api/Todos/Todos'
import { message } from 'antd'
import './Todos.scss'

const ToDos: React.FC = () => {
  const [description, setDescription] = useState('')

  const addTodo = (value: string) => {
    value === ''
      ? message.error('请输入内容')
      : todoApi.addTodo({ description: value }).then(() => {
          setDescription('')
          message.success('成功添加新任务')
        })
  }

  return (
    <div className="todos">
      <TodoInput
        value={description}
        onChange={value => setDescription(value)}
        addTodo={value => {
          addTodo(value)
        }}
      />
    </div>
  )
}

export default ToDos
