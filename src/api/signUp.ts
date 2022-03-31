import request from '../config/axios'

type SignObj = {
  account: string
  password: string
  password_confirmation: string
}

type LoginObj = {
  account: string
  password: string
}
const signUp = (data: SignObj) => {
  return request({ url: 'sign_up/user', method: 'post', data })
}
const login = (data: LoginObj) => {
  return request({ url: 'sign_in/user', method: 'post', data })
}

const exportedObject = {
  signUp,
  login,
}

export default exportedObject
