import React, { useEffect } from 'react'
import styled from 'styled-components'
import Profession_Card from './Profession_Card'
// ant
import { Select, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// actions
import { addTodo } from '../../../feature/Tests/test-slice';
import { Link } from 'react-router-dom';
import { loadProfessions } from '../../../feature/Content/content-slice';

// router




function Professions() {
  const dispatch = useDispatch()
  const professions = useSelector(state => state.content.professions)

  useEffect(() => {
    dispatch(loadProfessions())
    console.log(professions)
  }, [])

  return (
    <Container>
      <LeftBlock>
        <LeftBlockIten></LeftBlockIten>
        <LeftBlockIten small></LeftBlockIten>
      </LeftBlock>

      <RightBlock>
        <InputBlock>
          <InputSearch />
          <Select
            size='large'
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe',
              },
              {
                value: 'disabled',
                label: 'Disabled',
                disabled: true,
              },
            ]} />
        </InputBlock>

        <CardBlock>
          {professions.map(item => <Profession_Card card_item={item} />)}
        </CardBlock>
      </RightBlock>

    </Container>
  )
}

export default Professions

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`
const LeftBlock = styled.div`
  /* border: 1px solid rgba(1,1,1, 0.1); */
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
const LeftBlockIten = styled.div`
  border: 1px solid rgba(1,1,1, 0.1);
  border-radius: 15px;
  height: ${props => props.small ? '400px' : '800px'};
  /* background: ${props => props.small ? 'rgba(1,1,1, 0.02)' : 'rgba(1,1,1, 0.02)'}; */
// gradient_1
  /* background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,0.4661677170868347) 100%); */
// gradient_2
background: rgb(255,249,61);
background: radial-gradient(circle, rgba(255,249,61,0.5530024509803921) 0%, rgba(0,123,255,0.3429184173669467) 100%);
`

const RightBlock = styled.div`
  /* border: 1px solid rgba(1,1,1, 0.1); */
  width: 80%;
  height: 100px;
  padding: 30px;
`
const InputBlock = styled.div`
  position: relative;
  /* padding-bottom: 30px; */
  margin-bottom: 30px;
  /* border-bottom: 1px solid rgba(1,1,1, 0.2); */
`
const InputSearch = styled.input.attrs({ placeholder: 'Найти профессию' })`
  margin-right: 10px;
  /* Основные стили для input */
  padding: 10px;
  width: 600px;
  font-size: 16px;
  border: 1px solid rgba(1,1,1, 0.2); /* Граница с прозрачностью */
  border-radius: 5px;
  outline: none; /* Убираем стандартное выделение при фокусе */
  
  /* Стили при наведении на input */
  &:hover {
    border-color: rgba(1,1,1, 0.3); /* Изменяем цвет границы при наведении */
  }
  
  /* Стили при фокусе на input */
  &:focus {
    border-color: #007bff; /* Изменяем цвет границы при фокусе */
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2); /* Добавляем эффект подсветки */
  }
`
const CardBlock = styled.div`
  /* border: 1px solid rgba(1,1,1, 0.2); */
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  justify-content: space-between;
`
