import React from 'react'
import styled from 'styled-components'
// img
import model from '../../../assets//main/model_2.svg'
import { Link } from 'react-router-dom'



function Hello() {
  return (
    <InfoBlock>
      <TextBlock>
        <Title>С нами вы сможете достичь большего</Title>
        <Text>Используй наш ресурс для быстрого и структурированного изучения it профессий</Text>
        <BtnBlock>
          <Link to='/competents' style={{ textDecoration: 'none', color: 'inherit' }}><Btn_outline>Компетенции</Btn_outline></Link>
          {/* <Btn_primary>Поддержать нас</Btn_primary> */}
        </BtnBlock>
      </TextBlock>
      <Model_img src={model} />
    </InfoBlock>
  )
}

export default Hello


const Model_img = styled.img`
  position: absolute;
  right: 50px;
  top: 20px;
  width: 550px;
  height: 550px;
`
const InfoBlock = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  width: 90%;
  height: 600px;
  border-top: 1px solid rgba(1,1,1, 0.2);
  border-bottom: 1px solid rgba(1,1,1, 0.2);
`
const TextBlock = styled.div`
  padding: 100px;
`
const BtnBlock = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`
const Title = styled.div`
  /* text-transform: uppercase; */
  width: 700px;
  font-size: 60px;
  font-weight: 800;
  color: #000;
  margin-bottom: 50px;
`
const Text = styled.div`
  width: 650px;
  font-size: 25px;
  font-weight: 200;
  color: #000;
`
const Btn_outline = styled.div`
  width: 300px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px 15px;
  transition: 200ms all ease-in-out;
  cursor: pointer;
  &:hover {
    background: #000;
    color: #fff;
  }
`
const Btn_primary = styled.div`
  width: 300px;
  background: #3D3BFF;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  padding: 10px 15px;
  transition: 200ms all ease-in-out;
  cursor: pointer;
  &:hover {
    background: #000;
    color: #fff;
  }
`
