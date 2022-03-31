import request from '../../config/axios'

const getMe = () => {
  return request({ url: 'me', method: 'get' })
}

const exportedObject = {
  getMe,
}

export default exportedObject
