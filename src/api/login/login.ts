import request from '../../config/axios'

type LoginObj = {
  account: string
  password: string
}
const login = (data: LoginObj) => {
  return request({ url: 'sign_in/user', method: 'post', data })
}

const exportedObject = {
  login,
}

export default exportedObject
