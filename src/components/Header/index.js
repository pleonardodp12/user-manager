import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { NavBar, NavGroupItem, NavItem} from './styles';
import Logo from '../../assets/logo.svg';

export default function Header() {
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout()
      history.push("/entrar")
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <NavBar>
      <img src={Logo} alt="logo" />
      <NavGroupItem>
        <NavItem><Link to="/usuarios">Usuários</Link></NavItem>
        <NavItem onClick={handleLogout}>Sair</NavItem>
      </NavGroupItem>
    </NavBar>
  )
}
