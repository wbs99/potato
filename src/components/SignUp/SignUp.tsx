import React, { useState } from 'react'
import { Button, Input } from 'antd'
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons'

import signAPI from '../../api/signUp'
import { Link } from 'react-router-dom'
//import './SignUp.scss'

const signObj = {
  account: '',
  password: '',
  password_confirmation: '',
}
const SignUp: React.FC = () => {
  const [sign, setSign] = useState(signObj)

  const onAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSign({ ...sign, account: e.target.value })
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSign({ ...sign, password: e.target.value })
  }

  const onPasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSign({ ...sign, password_confirmation: e.target.value })
  }

  // 注册
  const submit = () => {
    signAPI
      .signUp(sign)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div className="signUp">
      <Input
        placeholder="请输入用户名"
        prefix={<UserOutlined />}
        value={sign.account}
        onChange={onAccountChange}
      />
      <Input.Password
        placeholder="请输入密码"
        iconRender={visible =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        value={sign.password}
        onChange={onPasswordChange}
      />
      <Input.Password
        placeholder="请输入密码"
        iconRender={visible =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        value={sign.password_confirmation}
        onChange={onPasswordConfirmChange}
      />
      <Button type="primary" onClick={submit}>
        注册
      </Button>
      <p>
        如果你有账号，请立即
        <Link to="/login">登录</Link>
      </p>
    </div>
  )
}

export default SignUp
