import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import todoApi from '../../api/Todos/Todos'
import { message } from 'antd'
import './Todos.scss'
import TodoItem from './TodoItem'

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
  editing: boolean
}

const ToDos: React.FC = () => {
  const [description, setDescription] = useState('')
  const [todoList, setTodoList] = useState<todoListType[]>([])

  useEffect(() => {
    getTodoList()
  }, [])

  const getTodoList = () => {
    todoApi
      .getTodoList()
      .then(res => {
        const todos = res.data.resources.map((item: any) => {
          JSON.parse(JSON.stringify(item))
          item.editing = false
          return item
        })
        setTodoList(todos)
      })
      .catch(err => {
        console.log(err)
      })
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

  const updateTodo = (id: number, params: updateTodoParams) => {
    todoApi.updateTodo(id, params).then(() => {
      message.success('成功更新 Todo')
      getTodoList()
    })
  }

  const updateEditing = (id: number) => {
    todoList.map(item => {
      if (item.id === id) {
        item.editing = true
      } else {
        item.editing = false
      }
      return item
    })
    setTodoList([...todoList])
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
            <TodoItem
              updateEditing={updateEditing}
              updateTodo={updateTodo}
              key={item.id}
              {...item}
            />
          )
        })}
      </main>
    </div>
  )
}

export default ToDos
