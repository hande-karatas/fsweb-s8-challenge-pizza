import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import {useState} from "react";

const StyledLabel = styled(Label)`
    display: block;
    font-family: Barlow;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: left;
    padding-top: 2rem;
    padding-bottom: 1rem;
`;
const Text = styled.p`
    text-align: left;
    font-family: Barlow;
    font-size: 1.03rem;
    font-weight: 400;
    padding-bottom: 0;
`;
const StyledInput = styled(Input)`
  width: 70%;
  height: 2rem;
  font-size: 1rem;
  padding: 0.5rem;

  &::placeholder {
    font-family: 'Barlow', sans-serif;
    font-size: 0.95rem;
    font-style: lighter;
    color: #5F5F5F;
  }
`;
const StyledTextArea = styled(Input)`
  width: 100%;
  height: 4rem;
  font-size: 1rem;
  padding: 1.3rem;
  resize: none;

  &::placeholder {
    font-family: 'Barlow', sans-serif;
    font-size: 0.95rem;
    font-style: lighter;
    color: #5F5F5F;
  }
`;


function NameNotes() {

    const [errors, setErrors] = useState(true);
    const [isValid, setIsValid]  = useState(false);

    function handleChange(event) {
        if (event.target.value.length > 3) {
            setErrors(false);
            setIsValid(false)
        } else {
            setErrors(true);
            setIsValid(true)
        }
    }
  return (
    <div>
        
        <FormGroup>
        <StyledLabel for="username">İsim</StyledLabel>
        <StyledInput
            id="username"
            name="username"
            placeholder="Lütfen isminizi giriniz."
            type="text"
            onChange={handleChange}
        />
        </FormGroup>

        <Text>{errors ? "İsminiz en az üç karakter içermeli." : ""}</Text>
        

        
        
        <FormGroup>
        <StyledLabel for="siparisnotu">Sipariş Notu</StyledLabel>
             <StyledTextArea
                id="siparisnotu"
                name="siparisnotu"
                type="textarea"
                placeholder="Siparişine eklemek istediğin bir not var mı?"                
            />
        </FormGroup>       
        

    </div>
  )
}

export default NameNotes