import React, { useState } from 'react'
import { Button, Input } from 'antd'
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons'

import signAPI from '../../api/signUp/signUp'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.scss'

const signObj = {
  account: '',
  password: '',
  password_confirmation: '',
}

const SignUp: React.FC = () => {
  const navigate = useNavigate()

  const [sign, setSign] = useState(signObj)

  const onChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setSign({
      ...sign,
      [key]: e.target.value.trim(),
    })
  }

  // 注册
  const submit = () => {
    signAPI
      .signUp(sign)
      .then(() => navigate('/login'))
      .catch(err => console.log(err))
  }

  return (
    <div className="signUp">
      <h1>全军出击</h1>
      <Input
        placeholder="请输入用户名"
        prefix={<UserOutlined />}
        value={sign.account}
        onChange={e => {
          onChange('account', e)
        }}
      />
      <Input.Password
        placeholder="请输入密码"
        iconRender={visible =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        value={sign.password}
        onChange={e => {
          onChange('password', e)
        }}
      />
      <Input.Password
        placeholder="请输入密码"
        iconRender={visible =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        value={sign.password_confirmation}
        onChange={e => {
          onChange('password_confirmation', e)
        }}
      />
      <Button type="primary" onClick={submit} className="signButton">
        注册
      </Button>
      <p>
        如果你有账号，请立即
        <Link to="/login">退出</Link>
      </p>
    </div>
  )
}

export default SignUp
