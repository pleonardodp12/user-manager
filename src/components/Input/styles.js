import styled from 'styled-components';

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

export const FormLabel = styled.span`
  font-size: 1.6rem;
  color: #696969;
`;

export const FormInput = styled.input`
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


