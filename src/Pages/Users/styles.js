import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  table {
    thead {
      tr {
        th {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  margin-top: 90px;
  color: #292b2c;
`;

export const Table = styled.table`
  width: 100%;
  thead { 
    tr {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      height: 50px;
      color: white;
      th {
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 4px 4px 0 0;
        border: 1px solid #c9c9c9; 
        background: #0275d8;
        @media(max-width: 900px){
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4) {
            display: none;
          }
        }
      }
    }
  }
  @media(max-width: 900px){
    width: 300px;
  }

`;

export const List = styled.tbody`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;

export const User = styled.tr`
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-radius: 4px;
`;

export const Field = styled.td`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 12px 15px;
  align-items: center;
  font-size: 14px;
  color: #333;
  font-weight: bold;
  border: 1px solid #c9c9c9;
  display:block;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  &:nth-child(5) {
    display: flex;
  }
  @media(max-width: 900px){
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      display: none;
    }
  }
  
`;

export const ProfileButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 4px;
  margin-left: 4px;
  padding: 4px 12px;
  opacity: 1;
  transition: ease .3s;
  cursor: pointer;
  &:hover{
    opacity: .8;
  }
`;

export const NewUserButton = styled(Link)`
  width: 170px;
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  border-radius: 0.4rem;
  border: none;
  margin: 1.6rem 1px;
  background: #5FbF7F;
  color: #f7f7f7;
  font-size: 1.8rem;
  transition: .3s ease;
  svg {
    margin-right: 4px;
  }
  &:hover{
    background: #51AF71;
  }
  @media(max-width: 900px){ 
    align-self: center;
  }
`;

export const NavigateButtonsContainer = styled.div`
  display: flex;
`;

export const ButtonNumber = styled.button`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.4rem;
  border: 1px solid #33333355;
  margin: 1.6rem 1px;
  background: #fff;
  color: #333;
  font-size: 1.4rem;
  font-weight: 700;
  transition: .3s ease;
  &:hover{
    background: #c9c9c9;
  }
`;

export const Button = styled.button`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.4rem;
  border: none;
  margin: 1.6rem 1px;
  background: #5FbF7F;
  color: #f7f7f7;
  font-size: 1.4rem;
  font-weight: 700;
  transition: .3s ease;
  &:hover{
    background: #51AF71;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media(max-width: 900px){
    flex-direction: column-reverse;
  }
`;