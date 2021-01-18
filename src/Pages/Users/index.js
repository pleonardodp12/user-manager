import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import { RiProfileLine, RiDeleteBinLine } from 'react-icons/ri';
import { Container,Title, List, Name, ProfileButton, User, NewUserButton } from './styles';

export default function Users(){
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const response = await api.get('usuarios')
    setUsers(response.data)
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  async function handleDeleteUser(cpf) {
    await api.delete(`usuarios/${cpf}`);

    const filteredUsers = users.filter((user) => user.cpf !== cpf);
    console.log(filteredUsers)

    setUsers(filteredUsers);
  }

  return(
    <Container>
      <Header />
      <Title>Usuários cadastrados</Title>
      <List>
        {users.map(user => (
          <User key={user.cpf}>
            <Name>{user.nome}</Name>

            <ProfileButton
              background="#0275d8"
              onClick={() => {}}
            >
              <RiProfileLine size={20} color="#fff" />
            </ProfileButton>

            <ProfileButton
              background="#d9534f"
              onClick={() => handleDeleteUser(user.cpf)}
            >
              <RiDeleteBinLine size={20} color="#fff" />
            </ProfileButton>
          </User>
        ))}
      </List>
      <NewUserButton>Adicionar novo usuário</NewUserButton>
    </Container>
  )
}