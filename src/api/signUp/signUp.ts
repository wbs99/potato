import request from '../../config/axios'

type SignObjType = {
  account: string
  password: string
  password_confirmation: string
}

const signUp = (data: SignObjType) => {
  return request({ url: 'sign_up/user', method: 'post', data })
}

const exportedObject = {
  signUp,
}

export default exportedObject
