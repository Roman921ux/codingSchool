import React from 'react'
import styled from 'styled-components'
import Competents_item from './Competents_item'


function Section_2({ profession }) {
  const Dop = {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deserunt libero tenetur quos quidem autem nemo minima reprehenderit, in fuga!',
    timeStydy: 12,
    petProjectCount: 5,
  }
  return (
    <Section>
      <TextBlock>
        <Title>ДЕТАЛИ:</Title>
        <Text style={{ marginBottom: '50px', marginTop: '15px' }}>{Dop.description}</Text>

        <div style={{ marginLeft: '20px', display: 'flex', gap: '15px' }}>
          <Btn_outline><Text_small>Длительность обучения:</Text_small> <span style={{ fontWeight: '900' }}>{Dop.timeStydy}</span></Btn_outline>
          <Btn_outline><Text_small>Проектов в портфолио:</Text_small> <span style={{ fontWeight: '900' }}>{Dop.petProjectCount}</span></Btn_outline>
        </div>
        {/* <Title_2 style={{ marginTop: '100px' }}>Основы курса</Title_2> */}
      </TextBlock>

      <CardBlock>
        {/* <VigBlock style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Text_small>Компетентции</Text_small>
        </VigBlock> */}
        {profession.compitens.map(item => <Competents_item com={item} />)}
      </CardBlock>
    </Section>
  )
}
export default Section_2


const Section = styled.div`
  /* background: #F5F5F5; */
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(1,1,1, 0.2);
  border-radius: 15px;
  padding: 40px 50px 50px 50px;
  width: 100%;
  /* background: rgb(255,255,255);
  background: linear-gradient(87deg, rgba(255,255,255,1) 44%, rgba(175,233,255,1) 100%); */
`
const TextBlock = styled.div`
  /* border: 1px solid rgba(1,1,1, 0.2); */

  display: flex;
  flex-direction: column;
`
const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const VigBlock = styled.div`
  background: #fff;
  border: 1px solid rgba(1,1,1, 0.1);
  border-radius: 15px;
  /* width: 100%; */
  padding: 8px 25px 8px 10px;
  /* margin-left: 50px; */
  margin-bottom: 10px;
  /* box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1); */
  box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);

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

export const Component_level = styled.div`
  /* background: #98ff9d; */
  border-radius: 15px;
  padding: 5px 15px 8px 12px;
  font-size: 15px;
  font-weight: 600;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2) inset;

`
export const Component_new = styled.div`
  display: inline-block;
  background: #80aded;
  /* color: #fff; */
  width: min-content;
  border-radius: 15px;
  /* padding: 8px 10px 8px 10px; */
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 32px;
  font-size: 15px;
  font-weight: 600;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2) inset;
`
const Title = styled.span`
  /* text-transform: uppercase; */
  width: 800px;
  font-size: 30px;
  line-height: 70px;
  font-weight: 800;
  color: #000;
  /* background: #3efffc; */
  /* margin-top: 40px; */
  margin-bottom: 40px;
`
const Title_2 = styled.span`
  /* text-transform: uppercase; */
  width: 800px;
  font-size: 60px;
  line-height: 70px;
  font-weight: 400;
  color: #000;
  /* background: #3efffc; */
  margin-top: 40px;
  margin-bottom: 40px;
`
const Text = styled.span`
  width: 900px;
  font-size: 25px;
  font-weight: 200;
  color: #000;
`
const Text_small = styled.span`
  width: 900px;
  font-size: 20px;
  font-weight: 200;
  color: #000;
  width: min-content;
  padding: 5px 15px 8px 12px;
  color: inherit;
  /* margin-right: 15px; // */
`