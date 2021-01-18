import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  margin-top: 60px;
`;

export const FormSection = styled.fieldset`
  min-inline-size: auto;
  border: 0;
  legend {
    color: #333;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
`;

export const TitleFormSection = styled.h2`
  font-size: 2.4rem;
  margin-top: 16px;
`;

