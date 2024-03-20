import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
//
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { loadProfession } from '../feature/Content/content-slice';
import Section_1 from '../components/CardInfo/Section_1';
import Section_2 from '../components/CardInfo/Section_2';
// ant
import { HomeOutlined } from '@ant-design/icons';

function CardInfo() {
  const dispatch = useDispatch()
  const profession = useSelector(state => state.content.profession)
  const status = useSelector(state => state.content.loading)
  // const [loading, setLoading] = useState(true)
  const { name } = useParams();
  // const navigate = useNavigate()
  const Dop = {
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate porro autem temporibus expedita totam deserunt aut alias quasi similique, obcaecati neque ad commodi nihil quos fugit ea, doloremque nisi sed?'
  }

  useEffect(() => {
    dispatch(loadProfession(name))
  }, [])

  return (
    <>
      {status === 'idle' && (
        <Container>
          {/* <HomeOutlined /> */}
          <Section_1 profession={profession} Dop={Dop} />
          <Section_2 profession={profession} />
        </Container>
      )}
    </>
  )
}

export default CardInfo

const Container = styled.div`
  /* border: 1px solid red; */
`
