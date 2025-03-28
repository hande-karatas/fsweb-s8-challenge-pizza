import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import Logo from "./Logo"

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #CE2829;        
    }
`

const SuccessText = styled.h1`
    margin: auto;
    font-family: Roboto Condensed;
    color: white;
    font-size: 4rem;
    font-weight: lighter;
`

function Success() {
    const history =useHistory();
    function handleClick() {
        history.push("/")
    }
  return (    
    <div>
        <GlobalStyle />
        <Logo/>
        <SuccessText>
            TEBRİKLER!
            <br/>
            SİPARİŞİNİZ ALINDI!
        </SuccessText>
        
    </div>
  )
}

export default Success