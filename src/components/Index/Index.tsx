import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IndexApi from '../../api/Index/getMe'

import { Menu, Dropdown } from 'antd'
import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons'
import './index.scss'
import ToDos from '../Todos/Todos'

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

  // function handleButtonClick(e) {
  //   message.info('Click on left button.')
  //   console.log('click left button', e)
  // }

  // function handleMenuClick(e) {
  //   message.info('Click on menu item.')
  //   console.log('click', e)
  // }

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        个人设置
      </Menu.Item>

      <Menu.Item key="2" icon={<LogoutOutlined />} onClick={logout}>
        注销
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="index">
      <header>
        <h2>全军出击</h2>
        <Dropdown overlay={menu}>
          <span>
            {user.account}
            <DownOutlined />
          </span>
        </Dropdown>
      </header>
      <main>
        <ToDos />
      </main>
    </div>
  )
}

export default Index
