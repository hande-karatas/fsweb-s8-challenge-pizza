import React from 'react'
import styled from "styled-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Image = styled.img`
    position: absolute;
    top: 6rem;
    left: 50%;
    transform: translateX(-50%);
    width: 20rem;

    &:hover {
    cursor: pointer;
    }
`

function Logo() {  
    const history =useHistory();
    function handleClick() {
        history.push("/")
    } 
    
    return (
        <div>      
            <Image src="../images/iteration-1-images/logo.svg" onClick={handleClick}/>      
        </div>
    )
}

export default Logo;