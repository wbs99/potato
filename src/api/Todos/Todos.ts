import request from '../../config/axios'

type addTodoParams = {
  description: string
}

type updateTodoParams = {
  description?: string
  completed?: boolean
  deleted?: boolean
  extra?: object
}

const addTodo = (data: addTodoParams) => {
  return request({ url: 'todos', method: 'post', data })
}

const getTodoList = () => {
  return request({ url: 'todos', method: 'get' })
}

const updateTodo = (data: updateTodoParams) => {
  return request({ url: 'todos/:id', method: 'post', data })
}

const exportedObject = {
  addTodo,
  getTodoList,
  updateTodo,
}

export default exportedObject
