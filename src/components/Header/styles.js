import styled from 'styled-components';

export const NavBar = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 40px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  box-shadow: 0px 2px 8px rgba(0,0,0, .4)
`;

export const NavGroupItem = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  font-size: 1.6rem;
  font-weight: 600;
  color: #0275d8;
  padding: 8px;
  transition: color ease-in-out .3s;
  cursor: pointer;
  &:hover{
    color: #0A48F0;
  }
`;
