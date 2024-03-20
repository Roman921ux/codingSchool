import React from 'react'
import styled from 'styled-components'
// icons
import { CompassOutlined } from '@ant-design/icons';
// ant 
import { Button } from 'antd';
import Logo from './headers/Logo';
import User from './headers/User';
import Menu_List from './headers/Menu_List';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <HeaderBlock>
      <Container>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><Logo /></Link>
        <Menu_List />
        <User />
      </Container>
    </HeaderBlock>
  )
}

export default Header


const Container = styled.div`
  /* border-bottom: 3px solid #ffdb3c; */
  /* border-bottom: 1px solid rgba(1,1,1, 0.2); */
  /* background: #fff; */
  /* position: fixed;
  background-color: #fff;
  z-index: 1000;
  /* border: 1px solid red; */
  /* top: 0;
  left: calc(50% - (1950px / 2)); */ 

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1950px;
  height: 150px;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 0 15px;
  /* color: white; */
`
const HeaderBlock = styled.div`
  /* width: 100vw; */
`
