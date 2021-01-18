import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
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

export const List = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const User = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-radius: 4px;
  margin: 4px 0;
`;

export const Name = styled.h5`
  flex: 1;
  height: 40px;
  border-radius: 4px;
  padding: 12px 15px;
  align-items: center;
  font-size: 14px;
  color: #333;
  font-weight: bold;
  border: 1px solid #c9c9c9;
`;

export const ProfileButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 4px;
  margin-left: 4px;
  padding: 0 12px;
  opacity: 1;
  transition: ease .3s;
  cursor: pointer;
  &:hover{
    opacity: .8;
  }
`;

export const NewUserButton = styled.button`
  width: 300px;
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
  &:hover{
    background: #51AF71;
  }
`;