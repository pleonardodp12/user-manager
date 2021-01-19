import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import { RiProfileLine, RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Container, Title, Table, List, Field, ProfileButton, User, NewUserButton, Button } from './styles';

export default function Users(){
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  
  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get(`usuarios/?_page=${currentPage}&_limit=${users.length}`)
      setUsers(response.data)
      console.log()
    }
    fetchUsers();
  }, [currentPage]);

  function prevPage() {
    if(currentPage > 1) setCurrentPage(currentPage - 1);
    console.log(`Currentpage = ${currentPage}`)
  }

  function nextPage() {
    if(currentPage < users.length) setCurrentPage(currentPage + 1);
    console.log(`Currentpage = ${currentPage}`)
    console.log('paginas ',users.length)
  }

  async function handleDeleteUser(id) {
    await api.delete(`usuarios/${id}`);

    const filteredUsers = users.filter((user) => user.id !== id);
    console.log(filteredUsers)

    setUsers(filteredUsers);
  }

  return(
    <Container>
      <Header />
      <Title>Usuários cadastrados</Title>
      <NewUserButton to="/usuarios/cadastro">
        <AiOutlinePlusCircle size={20} color="#fff"/> Novo usuário
      </NewUserButton>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Cidade</th>
            <th>Opções</th>
          </tr>
        </thead>
      
        <List>
            {users.map(user => (
              <User key={user.id}>
                <Field>{user.nome}</Field>
                <Field>{user.cpf}</Field>
                <Field>{user.email}</Field>
                <Field>{user.endereco?.cidade}</Field>
                <Field>
                  <ProfileButton background="#0275d8" onClick={() => {}}>
                    <RiProfileLine size={20} color="#fff" />
                  </ProfileButton>

                  <ProfileButton background="#d9534f" onClick={() => handleDeleteUser(user.id)}>
                    <RiDeleteBinLine size={20} color="#fff" />
                  </ProfileButton>
                </Field>
              </User>
            ))}
        </List>
      </Table>
      <Button onClick={() => prevPage()}>Previous</Button>
      <Button onClick={() => nextPage()}>Next</Button>
    </Container>
  )
}