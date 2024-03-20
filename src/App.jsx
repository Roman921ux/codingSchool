import React from 'react'
import styled from 'styled-components'
// components
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
// router
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CardInfo from './pages/CardInfo'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import User from './pages/profile/User'
import UserCompetents from './pages/profile/UserCompetents'
import UsersPage from './pages/UsersPage'
import AllCompetents from './pages/AllCompetents'




function App() {

  return (
    <Container>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />
          <Route path='/card-info/:name' element={<CardInfo />} />
          <Route path='/register' element={<Register />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/competents' element={<AllCompetents />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />}>
            <Route path="user" element={<User />} />
            <Route path="competents" element={<UserCompetents />} />
          </Route>
        </Routes>
      </Main>
      <Footer />
    </Container>
  )
}

export default App

const Container = styled.div`
  /* border: 1px solid red; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`