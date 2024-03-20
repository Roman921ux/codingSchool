import React from 'react'
import styled from 'styled-components'
//
import { SketchOutlined } from '@ant-design/icons';


function Competents_item({ com }) {
  return (
    <Card>
      <InfoBlock>
        <TextBlock>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <Text bold>{com.compit.id}</Text>
            <Component_new><SketchOutlined style={{ marginRight: '5px' }} />Компетенция</Component_new>
          </div>
        </TextBlock>
        <Btn_outline>Добавить</Btn_outline>
      </InfoBlock>
      <InfoBlock>
        <Title>{com.compit.name}</Title>
      </InfoBlock>
      {/* <Card_img src={model} /> */}
    </Card>
  )
}

export default Competents_item


const Card = styled.div`
  box-shadow: 0 5px 0 0 rgba(0,0,0,0.2);
  background: #fff;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 20px;
  position: relative;
  overflow: hidden;
  /* background-color: #F5F5F5; */
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  width: 650px;
  height: min-content;
  padding: 25px 35px 35px 35px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08); */
  transition: 150ms all ease-in-out;
  cursor: pointer;
  &:hover{
    /* background-color: #ebebeb; */
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(2px);
  }
`
const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`
const TextBlock = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  gap: 15px;
`
const Card_img = styled.img`
  width: 380px;
  height: 380px;
  position: absolute;
  top: -210px;
  right: 20px;
  /* border-radius: 10px; */
`
const Text = styled.div`
  font-size: 18px;
  font-weight: ${props => props.bold ? '900' : '400'};
  
`
const Title = styled.div`
  font-size: 36px;
  font-weight: 400;
`
export const Component_new = styled.div`
  background: #7de8fe;
  border-radius: 15px;
  padding: 5px 15px 8px 12px;
  font-size: 15px;
  font-weight: 600;
`
const Btn_outline = styled.div`
  width: calc(((650px) - (35px * 2))/2.03);
  text-align: center;
  height: min-content;
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
  width: calc(((650px) - (35px * 2))/2.03);
  background: #5e5ce9;
  
  /* background-color: rgba(74, 67, 216, 0.566); */
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