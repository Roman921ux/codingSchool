import React from 'react'
import styled from 'styled-components'
// img
import Hello from '../components/main/home/Hello'
import Professions from '../components/main/home/Professions'



const Container = styled.div`
  /* border: 1px solid red; */
  position: relative;
`

function Home() {
  return (
    <Container>
      <Hello />
      <Professions />
    </Container>
  )
}

export default Home