import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import {useState} from "react";

const Title = styled.h3`
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
    padding-bottom: 1.5rem;
`;

// 👇 3 kolonlu grid yapısı
const CheckboxGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 kolon */
    gap: 0.75rem 1.5rem; /* satır ve kolon boşlukları */
`;

const CheckboxItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-align: left;
    font-family: Barlow;
    font-size: 1.03rem;
    font-weight: bold;    
    color: #5F5F5F
`;

const errorMessages = {
    min: "En az 4 malzeme seçiniz.",
    max: "En fazla 10 malzeme seçebilirsiniz."
}

function Extras(props) {
    const { siparis } = props;
    const [errors, setErrors] = useState({
        min: true,
        max: false
    });
    const [isValid, setIsValid] = useState(false);
    const [formData, setFormData] = useState({ extras: [] });

    
    function onChangeFn(event) {
        const value = event.target.value;
    
        setFormData(prev => {
            const currentValues = prev.extras;
            let newExtras;
    
            if (currentValues.includes(value)) {
                newExtras = currentValues.filter(item => item !== value);
            } else {
                newExtras = [...currentValues, value];
            }    
                        
            const newErrors = {
                min: newExtras.length < 4,
                max: newExtras.length > 10
            };
            setErrors(newErrors);
    
            return {
                ...prev,
                extras: newExtras
            };
            setIsValid(newExtras.length >= 4 && newExtras.length <= 10);
        });
        

    }
    
   

    return (
        <div>
            <Title>Ek Malzemeler</Title>
            <Text>{errors.min ? errorMessages.min : errors.max ? errorMessages.max : "" } 5₺ </Text>            
            <FormGroup check>
                <CheckboxGrid>
                    {siparis.extras.map((extra, index) => (
                        <CheckboxItem key={index}>
                            <Input 
                                type="checkbox"
                                onChange={onChangeFn}                                
                                name="extras"
                                id={index} 
                                value={extra.toLowerCase()}
                            />
                            <Label check htmlFor={index}>{extra}</Label>
                        </CheckboxItem>
                    ))}
                </CheckboxGrid>
            </FormGroup>
        </div>
    );
}

export default Extras;
