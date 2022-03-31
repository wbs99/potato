import React, { useState } from 'react'
import { Button, Input } from 'antd'
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons'

import signAPI from '../../api/signUp'
import { Link, useNavigate } from 'react-router-dom'
import './Login.scss'

const loginObj = {
  account: '',
  password: '',
}
const Login: React.FC = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState(loginObj)

  const onChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [key]: e.target.value.trim(),
    })
  }

  const Login = () => {
    signAPI
      .login(login)
      .then(() => navigate('/'))
      .catch(err => console.log(err))
  }

  return (
    <div className="login">
      <h1>全军出击</h1>
      <Input
        placeholder="请输入用户名"
        prefix={<UserOutlined />}
        value={login.account}
        onChange={e => {
          onChange('account', e)
        }}
      />
      <Input.Password
        placeholder="请输入密码"
        iconRender={visible =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        value={login.password}
        onChange={e => {
          onChange('password', e)
        }}
      />
      <Button type="primary" onClick={Login} className="loginButton">
        登录
      </Button>
      <p>
        如果你没有账号，请立即
        <Link to="/signUp">注册</Link>
      </p>
    </div>
  )
}

export default Login
