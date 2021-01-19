import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
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

// export const SubmitButton = styled.button`
//   justify-content: center;
//   align-items: center;
//   background: #f04227;
//   border-radius: 4px;
//   margin-left: 10px;
//   padding: 0 12px;
//   opacity: ${(props) => (props.loading ? 0.7 : 1)};
// `;

export const Title = styled.h1`
  font-size: 2rem;
  margin-top: 90px;
  color: #292b2c;
`;

export const Table = styled.table`
  width: 900px;
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
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  border-radius: 0.4rem;
  border: none;
  outline: lightsteelblue;
  position: relative;
  margin-top: 1.6rem;
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
`;