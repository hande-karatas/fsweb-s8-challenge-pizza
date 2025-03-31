import React from 'react'
import styled from 'styled-components';
import { FormGroup, Label, Col, Input } from 'reactstrap';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';

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
const Select = styled.select` 
  height: 2rem;
  font-size: 1rem;
  padding: 0.1rem 0.2rem;
  font-family: 'Barlow', sans-serif;
  color: #5F5F5F;
  font-weight: lighter;
  border: 1px solid #5F5F5F;
  border-radius: 4px; 
  
`
const Option = styled.option`
  font-size: 0.95rem; 
  color: #292929;
`


function GeneralSelection(props) {
  //hoooks
  const {formData, setFormData} = props;

  //helper
  function handleChange(event) {
    const newFormData = {...formData, [event.target.name]: event.target.value};
    setFormData(newFormData)
    // console.log(newFormData)
  }
  //template
  return (
    <Wrapper>
        <Size>
            <Title>Boyut Seç<Span>*</Span></Title>            
            <FormGroup check>
            <Input id="küçük" name="size" type="radio" value="küçük" onClick={handleChange} />            
            <StyledLabel for="küçük" check>Küçük</StyledLabel>
            </FormGroup>
            <br/>
            <FormGroup check>
            <Input id="orta" name="size" type="radio" value="orta" onClick={handleChange} data-cy="radio"/>            
            <StyledLabel for="orta" check>Orta</StyledLabel>
            </FormGroup>
            <br/>
            <FormGroup check>
            <Input id="büyük" name="size" type="radio" value="büyük" onClick={handleChange} />            
            <StyledLabel for="büyük" check>Büyük</StyledLabel>
            </FormGroup>
        </Size>
        <DoughDiv>
          <Title>Hamur Seç<Span>*</Span></Title>
          <Select name="dough" defaultValue="" onChange={handleChange} data-cy="select-dough">
            <Option value="" hidden>Hamur Kalınlığı</Option>
            <Option value="incecik" >İncecik</Option>
            <Option value="ince" >İnce</Option>
            <Option value="kalın" >Kalın</Option>
          </Select>
        </DoughDiv>
    </Wrapper>
  )
}

export default GeneralSelection