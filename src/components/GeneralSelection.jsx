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


function GeneralSelection() {
  return (
    <Wrapper>
        <Size>
            <Title>Boyut Seç*</Title>            
            <FormGroup check>
            <Input id="küçük" name="radio" type="radio"/>            
            <Label for="küçük" check>        Küçük</Label>
            </FormGroup>
            <br/>
            <FormGroup check>
            <Input id="orta" name="radio" type="radio"/>            
            <Label for="orta" check>        Orta</Label>
            </FormGroup>
            <br/>
            <FormGroup check>
            <Input id="büyük" name="radio" type="radio"/>            
            <Label for="büyük" check>        Büyük</Label>
            </FormGroup>
        </Size>
        <DoughDiv>
            <Title>Hamur Seç*</Title>
            <Dough/>
        </DoughDiv>
    </Wrapper>
  )
}

export default GeneralSelection