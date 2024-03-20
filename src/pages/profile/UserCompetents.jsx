import React from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

function UserCompetents() {
  const user = useSelector(state => state.register.user)
  return (
    <Container>
      {!user.competence.length === 0 ? (<>List competents: {user.competence.map(c => <>{c}</>)}</>) : (<>У вас еще нет изученных компетенций</>)}

    </Container>
  )
}

export default UserCompetents
const Container = styled.div``