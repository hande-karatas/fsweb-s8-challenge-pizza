import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Logo from './Logo';
import Order from './Order';
import {pizza} from "../data.js";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }

  html, body, #root {
    height: 100%;
    text-align: left;
    color: #292929;
  }
`;
const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 25%;
  background-color: #CE2829;
  padding: 1rem 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
      height: 20%;
      
      padding-bottom: 0;
    }
  
`;
const HeaderTextContainer = styled.div`
  width: 62vh;
  padding-bottom: 1rem;
  @media (max-width: 768px) {
      width: 80%;      
      padding-bottom: .3rem;
    }
`;
const HeaderText = styled.h1`
  color: white;
  font-size: 1.2rem;
  font-family: Barlow;

  & span {
    font-weight: lighter;
  }
  @media (max-width: 768px) {
      font-size: 1rem;
    }  
`;
const Content = styled.div`
  padding-top: 40%;    
  width: 60vh;
  padding-bottom: 5rem;
  @media (max-width: 768px) {
      width: 100%;
    }
`;

function OrderPizza(props) {
  return (
    <>
      <GlobalStyle />
      <FixedHeader>
        <Logo />
        <HeaderTextContainer>
          <HeaderText><span>Anasayfa - </span>Sipariş Oluştur</HeaderText>
        </HeaderTextContainer>
      </FixedHeader>
      <Content>
        <Order siparis={pizza}/>
      </Content>
    </>
  );
}

export default OrderPizza;
