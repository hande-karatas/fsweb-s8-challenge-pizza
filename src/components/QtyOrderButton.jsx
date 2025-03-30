import React from 'react'
import styled from 'styled-components';
import QtyCounter from "./QtyCounter";
import SubmitButton from "./SubmitButton"

const QtyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledCounter = styled(QtyCounter)`
  flex-grow: 1;   
  font-family: Barlow;
  text-align: left;
`;

const ButtonAndCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.1rem solid #5F5F5F;    
  border-radius: 0.5rem;
  width: 22rem;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardTitle = styled.h3`
  font-family: Barlow;
  font-size: 1.3rem;
  font-weight: 600;
  color: #292929;
  text-align: left;
  padding-bottom: 1rem;
`;

const SelectionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Barlow;
  font-size: 1.03rem;
  font-weight: bold;    
  color: #5F5F5F;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Barlow;
  font-size: 1.03rem;
  font-weight: bold;    
  color: #CE2829;
  padding-top: 1rem;
`;

const StyledSubmitButton = styled(SubmitButton)`
  flex-grow: 2;
  font-family: Barlow;
  text-align: left;
  border: 1px solid green;
`;

function QtyOrderButton(props) {
  const { formData, setFormData } = props;

  return (
    <QtyWrapper>
      <StyledCounter formData={formData} setFormData={setFormData} />
      <ButtonAndCardWrapper>
        <SummaryCard>
          <CardTitle>Sipariş Toplamı</CardTitle>
          <SelectionInfo>
            <p>Seçimler</p>
            <p>25.00 ₺</p>
          </SelectionInfo>
          <TotalPrice>
            <p>Toplam</p>
            <p>110.00 ₺</p>
          </TotalPrice>
        </SummaryCard>
        <StyledSubmitButton formData={formData} />
      </ButtonAndCardWrapper>
    </QtyWrapper>
  );
}

export default QtyOrderButton;
