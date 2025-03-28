import React from 'react';
import styled from 'styled-components'
import GeneralSelection from './GeneralSelection';
import Extras from './Extras';
import NameNotes from './NameNotes';
import QtyOrderButton from './QtyOrderButton';

const Title = styled.h3`
    font-family: Barlow;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: left;
`
const PriceAndInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
`
const Price = styled.h2`
    font-family: Barlow;
    font-size: 2rem;
    font-weight: 700;
    
`
const Wrapper = styled.div`
    display: flex;
    text-align: right;
    gap: 3rem
`
const Rating = styled.p`
    font-family: Barlow;
    font-size: 1.03rem;
    font-weight: lighter;
`
const Comments = styled.p`
    font-family: Barlow;
    font-size: 1.03rem;
    font-weight: lighter;
`
const Explanation = styled.p`
    text-align: left;
    font-family: Barlow;
    font-size: 1.03rem;
    font-weight: lighter;
    padding-bottom: 1.5rem;
`
const StraightLine = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    border: .1px solid #5F5F5F;
    height: 0;
    width: 100%;
`

function Order(props) {
    const {siparis} = props;
  return (
    <div>
        <Title>{siparis.title}</Title>
        <PriceAndInfo>
            <Price>{siparis.price}</Price>
            <Wrapper>
                <Rating>{siparis.rating}</Rating>
                <Comments>({siparis.comments})</Comments>
            </Wrapper>
        </PriceAndInfo>           
        <Explanation>{siparis.explanation}</Explanation>
        <GeneralSelection />
        <Extras siparis={siparis}></Extras>
        <NameNotes></NameNotes>
        <StraightLine/>
        <QtyOrderButton></QtyOrderButton> 


    </div>
  )
}

export default Order