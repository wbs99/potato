import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate()

  const login = () => {
    navigate('/login')
  }
  const signUp = () => {
    navigate('/signUp')
  }

  return (
    <div>
      <Button type="primary" onClick={login}>
        登录
      </Button>
      <Button type="primary" onClick={signUp}>
        注册
      </Button>
    </div>
  )
}

export default Index
