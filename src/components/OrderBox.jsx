import React from 'react'
import styled from 'styled-components';

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
const Button = styled.div`
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
`


function OrderBox() {
  return (
    <div><Card>
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
        <Button>SİPARİŞ VER</Button>
        </div>
  )
}

export default OrderBox