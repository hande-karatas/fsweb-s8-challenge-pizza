import React from 'react'
import styled from 'styled-components';
import QtyCounter from "./QtyCounter";
import OrderBox from "./OrderBox"


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: .5rem    
`
const Counter = styled(QtyCounter)`
    flex-grow: 1;   
    font-family: Barlow;
    text-align: left;
    border: 1px solid red;
`
const OrderCard = styled(OrderBox)`
    flex-grow: 2;
    font-family: Barlow;
    text-align: left;
    border: 1px solid green;
`

function QtyOrderButton(props) {
    const { formData, setFormData } = props;
  return (
    <div>
        <Wrapper>
            <Counter formData={formData} setFormData={setFormData} ></Counter>
            <OrderCard formData={formData}></OrderCard>
        </Wrapper>
    </div>
  )
}

export default QtyOrderButton