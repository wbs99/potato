import request from '../../config/axios'

type addTodoParams = {
  description: string
}

const addTodo = (data: addTodoParams) => {
  return request({ url: 'todos', method: 'post', data })
}

const getTodoList = () => {
  return request({ url: 'todos', method: 'get' })
}

const updateTodo = (id: number, data: updateTodoParams) => {
  return request({ url: `todos/${id}`, method: 'PATCH', data })
}

const exportedObject = {
  addTodo,
  getTodoList,
  updateTodo,
}

export default exportedObject
