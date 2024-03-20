import React from 'react'
import styled from 'styled-components'
// ant
import { Button } from 'antd';
import { CoffeeOutlined, EllipsisOutlined, EyeOutlined, UserOutlined, ExperimentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  gap: 40px;
`
const Block = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
`

function Menu_List() {
  return (
    <Container>
      {/* <Link><EllipsisOutlined />Профессии</Link> */}
      <Link to='/users' style={{ textDecoration: 'none', color: 'inherit' }}><Block><UserOutlined /> Пользователи</Block></Link>
      <Link to='/competents' style={{ textDecoration: 'none', color: 'inherit' }}><Block><ExperimentOutlined /> Компетеции</Block></Link>
      <Block><EyeOutlined /> Контакты</Block>
      <Block><CoffeeOutlined /> О Code Compass</Block>
    </Container>
  )
}

export default Menu_List