import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { NavBar, NavGroupItem, NavItem} from './styles';

export default function Header() {
  const { logout } = useAuth()
  const history = useHistory()

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
      Logo
      <NavGroupItem>
        <NavItem>Usuários</NavItem>
        <NavItem onClick={handleLogout}>Sair</NavItem>
      </NavGroupItem>
    </NavBar>
  )
}
