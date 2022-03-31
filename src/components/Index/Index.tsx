import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IndexApi from '../../api/Index/getMe'

const userObj = {
  account: '',
}

const Index = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState(userObj)

  useEffect(() => {
    getMe()
  }, [])

  const getMe = () => {
    IndexApi.getMe()
      .then(res => {
        setUser({ ...user, account: res.data.account })
      })
      .catch(err => {
        console.log(err)
      })
  }

  const logout = () => {
    localStorage.setItem('x-token', '')
    navigate('/login')
  }

  return (
    <div>
      你好，欢迎 {user.account}
      <br />
      这是首页
      <Button type="primary" onClick={logout}>
        注销
      </Button>
    </div>
  )
}

export default Index
