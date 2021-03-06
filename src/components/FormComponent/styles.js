import styled from 'styled-components';

export const ContainerForm = styled.div`
  margin-top: 100px;
  position: absolute;
  z-index: 999;
  margin-top: 120px;
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
    position: relative;
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
  &:disabled{
    background: #c9c9c9;
    &:hover {
      opacity: 1;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const ErrorDescription = styled.div`
  font-size: 1.2rem;
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 999;
  font-family: sans-serif;
  line-height: 24px;
  width: 300px;
  background: #d9534f;
  border-radius: 40px;
  padding: 8px;
  text-align: center;
  color: #fff;
  transition: ease .3s;
  :before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-right: 20px solid #d9534f;
    border-left: 12px solid transparent;
    border-bottom: 14px solid #d9534f;
    border-top: 20px solid transparent;
    right: 0px;
    bottom: 16px;
    transition: ease .3s;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  position: relative;
  margin-top: 1.4rem;
  :focus-within::after {
    width: calc(100% - 2rem);
    height: 2px;
    content: '';
    background: #0275d8;
    position: absolute;
    left: 1rem;
    right: 1rem;
    bottom: 0;
  }
`;

export const Label = styled.span`
  font-size: 1.6rem;
  color: #696969;
`;

export const Input = styled.input`
  width: 100%;
  height: 4.6rem;
  margin-top: 0.6rem;
  border-radius: 0.4rem;
  background: white;
  border: 1px solid #69696966;
  outline: 0;
  padding: 0 1rem;
  font-size: 1.6rem;
  color: #696969;
  &:focus {
    box-shadow: 0px 0px 2px 2px #0275d866;
    border: 0;
  }
`;