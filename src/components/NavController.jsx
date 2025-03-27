import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from 'styled-components';

const Controller=styled.div`
position: fixed;
right: 1rem;
bottom: 1rem;
display: flex;
gap: 1rem
`

export default function NavController() {
    return(
        <Controller>
            <Link to="/">Home</Link>
            <Link to="/orderpizza">Order Pizza</Link>
            <Link to="/success">Success</Link>            
        </Controller>
    )
}