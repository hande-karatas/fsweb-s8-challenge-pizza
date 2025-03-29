import React from 'react'
import styled from 'styled-components';
import QtyCounter from "./QtyCounter";
import SubmitButton from "./SubmitButton"


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: .5rem   
    @media (max-width: 768px) {
      flex-direction: column;
    } 
`
const Counter = styled(QtyCounter)`
    flex-grow: 1;   
    font-family: Barlow;
    text-align: left;
    border: 1px solid red;
`
const SButton = styled(SubmitButton)`
    flex-grow: 2;
    font-family: Barlow;
    text-align: left;
    border: 1px solid green;
`

const Wrapper2= styled.div`
    display: flex;
    flex-direction: column;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: .1rem solid #5F5F5F;    
    border-radius: .5rem;
    width: 22rem;
    padding: 2rem;
    
`
const Title = styled.h3`
    font-family: Barlow;
    font-size: 1.3rem;
    font-weight: 600;
    color: #292929;
    text-align: left;
    padding-bottom: 1rem;
`
const Selection = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Barlow;
    font-size: 1.03rem;
    font-weight: bold;    
    color: #5F5F5F
`
const Total = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Barlow;
    font-size: 1.03rem;
    font-weight: bold;    
    color: #CE2829;
    padding-top: 1rem
    
`

function QtyOrderButton(props) {
    const { formData, setFormData } = props;
  return (
    <div>
        <Wrapper>
            <Counter formData={formData} setFormData={setFormData} ></Counter>
            <Wrapper2>
                <Card>
                <Title>Sipariş Toplamı</Title>
                <Selection>
                    <p>Seçimler</p>
                    <p>25.00 ₺</p>
                </Selection>
                <Total>
                    <p>Toplam</p>
                    <p>110.00 ₺</p>
                </Total>            
                </Card>
            <SButton formData={formData}></SButton>
            </Wrapper2>
        </Wrapper>
    </div>
  )
}

export default QtyOrderButton