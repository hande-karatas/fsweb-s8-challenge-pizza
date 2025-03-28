import React from 'react'
import styled from 'styled-components'

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

function Dough() {
  return (
    <div>
      <Select defaultValue="">
        <Option value="" hidden>
          Hamur Kalınlığı
        </Option>
        <Option value="incecik">İncecik</Option>
        <Option value="ince">İnce</Option>
        <Option value="kalın">Kalın</Option>
      </Select>
    </div>
  )
}

export default Dough
