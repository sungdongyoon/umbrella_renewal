import React from 'react';
import styled from 'styled-components';
import responsive from '../style/respoinsive';

const Container = styled.div`
  width: 30%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #000;
  @media screen and ${responsive.mobile} {
    width: 60%;
  }
`;

const Content = styled.div`
  span {
    font-weight: bold;
    font-size: 10px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <span>copyright ⓒ 2023취업시켜조 All rights reserved</span>
      </Content>
    </Container>
  )
}

export default Footer;
