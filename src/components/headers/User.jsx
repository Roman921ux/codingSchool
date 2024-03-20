import React from 'react'
import styled from 'styled-components'
import user from '../../assets/user.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function User() {
  const token = useSelector(state => state.register.token)
  return (
    <Container>
      <Link to='/register' style={{ textDecoration: 'none', color: 'inherit' }}><Btn>Зарегистрироваться</Btn></Link>
      <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}><Btn>Войти</Btn></Link>

      <Link to='/profile' style={{ textDecoration: 'none', color: 'inherit' }}><User_img src={user} /></Link>
    </Container>
  )
}

export default User

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
const Btn = styled.div`
  /* border: 1px solid rgba(1,1,1, 0.5); */
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  background-color: #efefef;
  padding: 15px 20px;
  cursor: pointer;
  &:hover {
  background-color: #D7D7D7;
  }
`
const User_img = styled.img`
  width: 40px;
  height: 40px; 
  margin-left: 15px;
  cursor: pointer;
`
