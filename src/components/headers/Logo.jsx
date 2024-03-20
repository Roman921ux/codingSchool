import React from 'react'
import styled from 'styled-components'
// icons
import { CompassOutlined } from '@ant-design/icons';
// img
import logo from '../../assets/logo_2.png'



const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
`
const Logo_title = styled.span`
  font-size: 30px;
  font-weight: 700;
  line-height: 30px;
  text-transform: uppercase;
`


function Logo() {
  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Logo_title>C</Logo_title>
        <Logo_title>C</Logo_title>
      </div>
      {/* <CompassOutlined style={{ fontSize: '70px', margin: '0 10px 0 10px', color: '#ffdb3c' }} /> */}
      <img src={logo} alt="logo" style={{ width: '60px', height: '60px', margin: '0 10px 0 10px', color: '#ffdb3c' }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Logo_title>de</Logo_title>
        <Logo_title>mpass</Logo_title>
      </div>
    </Container>
  )
}

export default Logo