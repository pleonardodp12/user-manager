import styled from 'styled-components';

export const SearchInputContainer = styled.div`
  position: relative;
  width: 200px;
  height: 40px;
  background: #57bd84;
  border-radius: 0.4rem;
  border: 1px #57bd84 solid;
  @media(max-width: 900px){
    margin-top: 16px;
    width: 170px;
  }
`;

export const Input = styled.input`
  border: 0;
  color: #696969;
  font-size: 1.6rem;
  outline: 0;
  width: 100%;
  height: 100%;
  padding: 1.6rem;
  background: #fff;
  width: 100%;
  border-radius: 0.4rem;
  appearance: none;
  transition: all .3s cubic-bezier(0, 0, 0.43, 1.49);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;
  &:not(:placeholder-shown) {
    border-radius: 0.4rem 0 0 0.4rem;
    width: calc(100% - 4rem);
    display: flex;
    + div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
}
`;

export const ButtonSearch = styled.div`
  border: 0;
  font-size: 1.6rem;
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 4rem;
  height: 100%;
  font-weight: bold;
  background: #57bd84;
  border-radius: 0 0.4rem 0.4rem 0;
`;
