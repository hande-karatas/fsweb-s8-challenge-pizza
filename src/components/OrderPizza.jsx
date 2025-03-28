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
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding-top: 40%;    
  width: 60vh;
  padding-bottom: 5rem;
`;

function OrderPizza(props) {
  
  return (
    <>
      <GlobalStyle />
      <FixedHeader>
        <Logo />
      </FixedHeader>
      <Content>
        <Order siparis={pizza}/>
      </Content>
    </>
  );
}

export default OrderPizza;
