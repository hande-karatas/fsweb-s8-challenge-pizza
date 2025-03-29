import React, { useState } from 'react'
import styled from 'styled-components';
import { useEffect } from 'react';
const Wrapper = styled.div`
  display: flex;
`

const Button = styled.div`
    font-family: Barlow;
    font-size: 1.2rem;
    font-weight: 600;
    flex-grow: 1;
    text-align: center;
    padding: 0.4rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Minus = styled(Button)`
    border-radius: 1rem 0 0 1rem;
    background-color: #FDC913;  
`

const Number = styled.div`
    font-family: Barlow;
    font-size: 1.2rem;
    font-weight: 600;
    flex-grow: 1;
    text-align: center;
    padding: 0.4rem;    
    border-top: .1rem solid #5F5F5F;
    border-bottom: .1rem solid #5F5F5F;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Plus = styled(Button)`
    border-radius: 0 1rem 1rem 0;
    background-color: #FDC913;  
`

function QtyCounter(props) {
  const [quantity, setQuantity] = useState(1)
  const { setFormData, formData } = props;

  const handleMinus = () => {
    setQuantity(prev => Math.max(1, prev - 1))
  }

  const handlePlus = () => {
    setQuantity(prev => prev + 1)
  }

  useEffect(() => {
    const newFormData = ({...formData, quantity: quantity })
    setFormData(newFormData);
    console.log(newFormData)
  }, [quantity]);

  return (
    <Wrapper>
      <Minus onClick={handleMinus}>-</Minus>
      <Number>{quantity}</Number>
      <Plus onClick={handlePlus}>+</Plus>
    </Wrapper>
  )
}

export default QtyCounter
