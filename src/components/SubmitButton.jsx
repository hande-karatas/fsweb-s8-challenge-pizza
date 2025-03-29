import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import axios from "axios";


const Button = styled.button`
    font-family: Barlow;
    font-size: 1.2rem;
    font-weight: 600;    
    text-align: center;
    padding: 1rem;
    width: 100%;
    height: 4rem;
    cursor: pointer;
    border-radius: 1rem;
    background-color: #FDC913;
    border: none;

    &:disabled {
        background-color: #ddd;
        color: #999;
        cursor: not-allowed;
    }
`



function OrderBox(props) {
    //hooks
    const { formData } = props;
    const [order, setOrder] = useState(null);
    const [isValid, setIsValid] = useState(false)
    const history = useHistory();

    //helper
    useEffect(()=> {
        if (formData.size && 
            formData.dough && 
            (formData.extras.length >= 4) && 
            (formData.extras.length <= 10) && 
            (formData.username.length >= 3)) {
                setIsValid(true)
            } else {
                setIsValid(false)
            }
    }, [formData])
    
    function handleSubmit() {        
        axios.post("https://reqres.in/api/pizza", formData)
        .then(response=>{
            setOrder(response.data)
            console.log(response.data)
            history.push("/success")
        })
        .catch(error=>console.log(error.message))
    }

  return (
    <div>        
        <Button data-cy="submit-button" onClick={handleSubmit} disabled={!isValid}>SİPARİŞ VER</Button>
    </div>
  )
}

export default OrderBox