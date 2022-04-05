import React, { useState } from 'react'
import { Checkbox, Input } from 'antd'
import { EnterOutlined, DeleteFilled } from '@ant-design/icons'

type Props = {
  id: number
  description: string
  completed: boolean
  editing: boolean
  updateTodo: (id: number, params: updateTodoParams) => void
  updateEditing: (id: number) => void
}

const TodoItem: React.FC<Props> = props => {
  const [editText, setEditText] = useState(props.description)

  const Editing = (
    <div className="editing">
      <Input
        value={editText}
        onChange={e => {
          setEditText(e.target.value)
        }}
        onPressEnter={() => {
          updateTodo({ description: editText })
        }}
      />
      <div className="iconWrapper">
        <EnterOutlined onClick={() => updateTodo({ description: editText })} />
        <DeleteFilled onClick={() => updateTodo({ deleted: true })} />
      </div>
    </div>
  )
  const updateTodo = (params: updateTodoParams) => {
    props.updateTodo(props.id, params)
  }

  const updateEditing = (id: number) => {
    props.updateEditing(id)
  }

  return (
    <div>
      <Checkbox
        onChange={e => updateTodo({ completed: e.target.checked })}
        checked={props.completed}
      />
      {props.editing ? (
        Editing
      ) : (
        <span
          onDoubleClick={() => {
            updateEditing(props.id)
          }}
        >
          {props.description}
        </span>
      )}
    </div>
  )
}

export default TodoItem
