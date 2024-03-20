import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../feature/Register/register-slice';
import styled from 'styled-components'


function Login() {
  const dispatch = useDispatch()

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    dispatch(loginUser(values))
  };
  return (
    <Container>
      <Form
        style={{ maxWidth: '400px' }}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item> */}

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <div style={{ marginTop: '5px' }}>
            Or <Link to="/register">register now!</Link>
          </div>

        </Form.Item>
      </Form>
    </Container>
  )
}

export default Login


const Container = styled.div`
  border: 1px solid rgba(1,1,1, 0.2);
  border-radius: 15px;
  padding: 60px;
  margin-top: -350px;
`
