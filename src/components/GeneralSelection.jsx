import React from 'react'
import styled from 'styled-components';
import { FormGroup, Label, Col, Input } from 'reactstrap';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
  import Dough from './Dough';

const Wrapper = styled.div`
    display: flex;    
`
const Title = styled.h3`
    font-family: Barlow;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: left;
    padding-bottom: 1rem;
`
const Size = styled.div`
    flex-grow: 1;   
    font-family: Barlow;
    text-align: left;
`
const DoughDiv = styled.div`
    flex-grow: 1;
    font-family: Barlow;
    text-align: left;
`

const Span = styled.span`
  color: #CE2829;
`
const StyledLabel = styled(Label)`
  padding-left: 1rem;
`


function GeneralSelection() {
  return (
    <Wrapper>
        <Size>
            <Title>Boyut Seç<Span>*</Span></Title>            
            <FormGroup check>
            <Input id="küçük" name="radio" type="radio"/>            
            <StyledLabel for="küçük" check>Küçük</StyledLabel>
            </FormGroup>
            <br/>
            <FormGroup check>
            <Input id="orta" name="radio" type="radio"/>            
            <StyledLabel for="orta" check>Orta</StyledLabel>
            </FormGroup>
            <br/>
            <FormGroup check>
            <Input id="büyük" name="radio" type="radio"/>            
            <StyledLabel for="büyük" check>Büyük</StyledLabel>
            </FormGroup>
        </Size>
        <DoughDiv>
            <Title>Hamur Seç<Span>*</Span></Title>
            <Dough/>
        </DoughDiv>
    </Wrapper>
  )
}

export default GeneralSelection