import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCompetents, loadInfoUser } from '../feature/Register/register-slice'
import styled from 'styled-components'
import User from './profile/User'
import UserCompetents from './profile/UserCompetents'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
//
import { UserOutlined, CodeSandboxOutlined } from '@ant-design/icons';

function Profile() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.register.token)

  useEffect(() => {
    dispatch(loadInfoUser(token.access))
  }, [])

  return (
    <Container>
      <LeftBlock>
        <Link to="/profile/user" style={{ textDecoration: 'none', color: 'inherit' }}><Item><UserOutlined style={{ marginRight: '10px' }} />Профиль</Item></Link>
        <Link to="/profile/competents" style={{ textDecoration: 'none', color: 'inherit' }}><Item><CodeSandboxOutlined style={{ marginRight: '10px' }} />Компетенции</Item></Link>
      </LeftBlock>
      <RightBlock>
        <Outlet />
      </RightBlock>
    </Container>
  )
}

export default Profile

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  height: 60vh;
`

const LeftBlock = styled.div`
  /* border: 1px solid rgba(1,1,1, 0.2); */
  width: 20%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 30px;
`

const RightBlock = styled.div`
  /* border: 1px solid rgba(1,1,1, 0.2); */
  width: 80%;
  padding: 30px;
`

const Item = styled.div`
  border: 1px solid rgba(1,1,1, 0.2);
  /* width: 100%; */
  border-radius: 5px;
  padding: 15px;
  font-size: 20px;
  font-weight: 600;
`

