import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ContainerForm = styled.div`
  margin-top: 100px;
  padding: 16px;
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0,0,0, 0.2);
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const FormField = styled.fieldset`
  min-inline-size: auto;
  border: 0;
  display: flex;
  flex-direction: column;
  legend {
    color: #333;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
`;

export const TitleFormField = styled.h2`
  font-size: 2.4rem;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  div:nth-child(1) {
    margin-right: 8px;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  button:nth-child(1) {
    margin-right: 8px;
    align-self: end;
  }
`;

export const Button = styled.button`
  width: 100px;
  align-self: flex-end;
  padding: 1.2rem;
  border-radius: 0.4rem;
  border: none;
  outline: lightsteelblue;
  position: relative;
  margin-top: 1.6rem;
  background: #0275d8;
  background: ${(props) => props.background};
  color: #f7f7f7;
  font-size: 1.8rem;
  transition: .3s ease;
  &:hover {
    opacity: 0.8;
  }
`;
