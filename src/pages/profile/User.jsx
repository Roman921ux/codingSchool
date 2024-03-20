import React from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

function User() {
  const user = useSelector(state => state.register.user)

  return (
    <Container>
      Name: {user.username}
    </Container>
  )
}

export default User

const Container = styled.div``