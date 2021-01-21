import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import { RiProfileLine, RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import SearchInput from '../../components/SearchInput';
import Loading from '../../components/Loading/';
import { Container,
  Title,
  HeaderContainer,
  Table,
  List,
  Field,
  ProfileButton,
  User,
  NewUserButton,
  Button,
  ButtonNumber,
  NavigateButtonsContainer,
} from './styles';
import FormEditComponent from '../../components/FormEditComponent';

export default function Users(){
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [totalUsers, setTotalUsers] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [quantityPerPage, setQuantityPerPage] = useState(5)
  const [pages, setPages] = useState(0);
  const [details, setDetails] = useState(false);
  const [userDetails, setUserDetails] = useState(...users);

  useEffect(() => {
    async function searchUser() {
      try{
        const { data } = await api.get(`usuarios/?q=${search}`);
        setUsers(data)
        setLoading(true)
      } catch(error){
        console.log("Erro ao buscar usuários")
      }
      setLoading(false)
    }
    searchUser();
  },[search]);
  
  useEffect(() => {
    async function fetchUsers() {
      try{
        setLoading(true)
        const { data, headers} = await api.get(`usuarios/?_page=${currentPage}&_limit=${quantityPerPage}`);
        setLoading(false)
        setUsers(data);
        setTotalUsers(headers["x-total-count"]);
      } catch(error){
        console.log("Erro ao buscar usuários")
      }
    }
    fetchUsers();
  }, [currentPage]);

  useEffect(() => {
    setPages(Math.round((totalUsers/quantityPerPage)));
  }, [totalUsers])

  function prevPage() {
    if(currentPage > 1) setCurrentPage(currentPage - 1);
    console.log(`Currentpage = ${currentPage}`)
  }

  function nextPage() {
    if(currentPage < users.length) setCurrentPage(currentPage + 1);
    console.log(`Currentpage = ${currentPage}`)
    console.log('usuarios por pagina ',users.length)
  }

  async function handleDeleteUser(id) {
    setLoading(true);
    await api.delete(`usuarios/${id}`);
    const filteredUsers = users.filter((user) => user.id !== id);
    console.log(filteredUsers)
    setLoading(false);
    setUsers(filteredUsers);
  };

  const renderButtonsPage = () => {
    let buttonPage = [];
    for (let page = 1; page <= pages; page++) {
      buttonPage.push(<ButtonNumber key={page} onClick={() => setCurrentPage(page)}>{page}</ButtonNumber>)
    }
    return buttonPage;
  };

  async function userDetailsHandle( id ) {
    setLoading(true)
    await api.get('usuarios/', { id })
    const filteredUsers = users.filter((user) => user.id === id);
    setLoading(false)
    console.log(filteredUsers)
    setUserDetails(filteredUsers)
    setDetails(true)
  }

  return(
    <Container>
      <Header />
     
      {loading
        ? (
        <Loading></Loading>)
        : (
          <>
            <Title>Usuários cadastrados</Title>
            <HeaderContainer>
            <NewUserButton to="/usuarios/cadastro">
              <AiOutlinePlusCircle size={20} color="#fff"/> Novo usuário
            </NewUserButton>
            <SearchInput search={(e) => setSearch(e.target.value)}/>
          </HeaderContainer>
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
                      <ProfileButton background="#0275d8" onClick={() => {userDetailsHandle(user.id)}}>
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
          <NavigateButtonsContainer>
            <Button onClick={() => prevPage()}>{"<"}</Button>
            {renderButtonsPage()}
            <Button onClick={() => nextPage()}>{">"}</Button>
          </NavigateButtonsContainer>
          {details &&
          <>
              <FormEditComponent user={userDetails} />
          </>
          }
        </>
      )}
    </Container>
  )
}