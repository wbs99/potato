import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import todoApi from '../../api/Todos/Todos'
import { message } from 'antd'
import './Todos.scss'

type todoListType = {
  completed: boolean
  completed_at: null
  created_at: string
  deleted: boolean
  description: string
  extra: object
  id: number
  updated_at: string
  user_id: number
}

const ToDos: React.FC = () => {
  const [description, setDescription] = useState('')
  const [todoList, setTodoList] = useState<todoListType[]>([])

  useEffect(() => {
    getTodoList()
  }, [])

  const getTodoList = () => {
    const getTodoList = async () => {
      const res = await todoApi.getTodoList()
      setTodoList(res.data.resources)
    }
    getTodoList()
  }

  const addTodo = (value: string) => {
    value === ''
      ? message.error('请输入内容')
      : todoApi.addTodo({ description: value }).then(() => {
          setDescription('')
          message.success('成功添加新任务')
          getTodoList()
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
      <main>
        {todoList.map(item => {
          return (
            <div key={item.id}>
              <p>{item.description}</p>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default ToDos
