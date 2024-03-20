import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  /* border: 1px solid red; */
  width: 1950px;
  margin: 0 auto;
  padding: 0 15px;
`
const MainBlock = styled.div`
`

function Main({ children }) {
  return (
    <MainBlock>
      <Container>
        {children}
      </Container>
    </MainBlock>
  )
}

export default Main