import React from 'react'
import styled from 'styled-components'



function Footer() {
  return (
    <FooterBlock>
      <Container>
        {/* <Text>Контактная информация: skorohodroman921@gmail.com | +7 918 522 96 65</Text> */}
      </Container>
    </FooterBlock>
  )
}

export default Footer

const Container = styled.div`
  /* border: 1px solid rgba(1,1,1, 0.2); */
  /* border: 1px solid red; */
  width: 1950px;
  height: 100px;
  margin: 0 auto;
  padding: 30px;
  color: #fff;
`
const FooterBlock = styled.div`
  /* background: rgba(1,1,1); */
// gradient
background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(1,23,48,1) 59%, rgba(33,69,109,0.9927783613445378) 100%);
  margin-top: 150px;
  /* width: 100vw; */
`

const Text = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`
const Title = styled.span`

  color: #fff;
`
