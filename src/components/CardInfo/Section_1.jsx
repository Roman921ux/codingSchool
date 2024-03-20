import React from 'react'
import styled from 'styled-components'
//
import model from '../../assets/main/model_6.svg'
//
import { FireOutlined, BulbOutlined } from '@ant-design/icons';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Section_1({ profession, Dop }) {
  return (
    <Section>
      <TextBlock>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
            <VigBlock_home style={{ padding: '15px' }}>
              <HomeOutlined />
            </VigBlock_home>
          </Link>
          <VigBlock style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>

            <Text_small>Профессия</Text_small>
            <Component_new><FireOutlined style={{ marginRight: '5px' }} />Востребовано</Component_new>
            <Component_level style={{ background: `${profession.color}` }}><BulbOutlined style={{ marginRight: '5px' }} />{profession.difficult}</Component_level>
          </VigBlock>
        </div>

        <Title>{profession.name}</Title>
        <Text>{Dop.description}</Text>
      </TextBlock>
      <Model_img src={model} />

    </Section>
  )
}

export default Section_1

const Model_img = styled.img`
  position: absolute;
  right: 50px;
  top: 20px;
  width: 550px;
  height: 550px;
`


const Section = styled.div`
    position: relative;
    overflow: hidden;
  /* background: #F5F5F5; */
  border: 1px solid rgba(1,1,1, 0.2);
  background: rgb(255,255,255);
background: linear-gradient(87deg, rgba(255,255,255,1) 44%, rgba(94,92,233,0.2392769607843137) 100%);
  /* background: rgb(255,255,255);
background: linear-gradient(87deg, rgba(255,255,255,1) 44%, rgba(94,92,233,1) 100%); */
  border-radius: 15px;
  padding: 40px 50px 50px 50px;
  width: 100%;
  margin-bottom: 30px;
`
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`
const VigBlock = styled.div`
  border: 1px solid rgba(1,1,1, 0.1);
  border-radius: 30px;
  width: max-content;
  padding: 4px 8px 4px 6px;
  /* box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1); */
  box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);

`
const VigBlock_home = styled.div`
  border: 1px solid rgba(1,1,1, 0.1);
  border-radius: 30px;
  display: flex;
  cursor: pointer;
  width: max-content;
  padding: 4px 20px 4px 6px;
  /* box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1); */
  box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);

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
  background: #FFF93D;
  border-radius: 15px;
  padding: 5px 15px 8px 12px;
  font-size: 15px;
  font-weight: 600;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2) inset;
`
const Title = styled.span`
  /* text-transform: uppercase; */
  width: 600px;
  font-size: 60px;
  line-height: 70px;
  font-weight: 800;
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
  margin-right: 15px; //
`