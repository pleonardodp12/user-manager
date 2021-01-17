import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #a9a9a9;
  border-radius: 4px;
  padding: 40px;
`;

export const TitleCardBody = styled.div`
  font-size: 4rem;
  color: #292b2c;
  margin-bottom: 2rem;
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    font-size: 1.6rem;
    color: #292b2c;
  }
  strong {
    font-size: 1.6rem;
    color: #0275d8;
    cursor: pointer;
    &:hover {
      color: #0A48F0;
    }
  }
`;

export const ButtonConfirm = styled.button`
  width: 300px;
  padding: 1.2rem;
  border-radius: 0.4rem;
  border: none;
  outline: lightsteelblue;
  position: relative;
  margin-top: 1.6rem;
  background: #0275d8;
  color: #f7f7f7;
  font-size: 1.8rem;
  transition: .3s ease-in;
  &:hover{
    background: #0A48F0;
  }
`;

export const Line = styled.div`
  width: 300px ;
  margin: 1.6rem 0;
  height: 1px;
  background: #a9a9a9;
`;