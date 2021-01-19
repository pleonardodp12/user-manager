import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Input from '../../components/Input';
import api from '../../services/api';
import { Container, ContainerForm, Form, FormField, ContainerInput, ContainerButton, TitleFormField, Button } from './styles';

export default function NewUser() {
  const history = useHistory();
  const [switchForm1, setSwitchForm1] = useState(true);
  const [switchForm2, setSwitchForm2] = useState(false);
  const [nome, setNome]=useState("");
  const [cpf, setCpf]=useState("");
  const [email, setEmail]=useState("");
  const [cep, setCep]=useState("");
  const [rua, setRua]=useState("");
  const [numero, setNumero]=useState("");
  const [bairro, setBairro]=useState("");
  const [cidade, setCidade]=useState("");
  function handleSwitch(){
    setSwitchForm1((prevState) => !prevState);
    setSwitchForm2((prevState) => !prevState);
  };

  async function handleSubmitNewUser(e){
    e.preventDefault();
    api.post('usuarios', {
        nome: nome ,
        cpf: cpf ,
        email: email ,
        endereco: {
            cep: cep ,
            rua: rua ,
            numero: numero ,
            bairro: bairro ,
            cidade: cidade ,
        }
    }).then(() => {
      alert('Cadastro realizado com sucesso');
      history.push('/usuarios')
    }).catch(() => {
      alert('Erro no cadastro');
    })
  }

  return (
    <Container>
      <Header />
      <ContainerForm>
        <Form onSubmit={handleSubmitNewUser}>
          {switchForm1 &&
            <FormField>
              <legend>
                <TitleFormField>Dados</TitleFormField>
              </legend>
              <Input label="Nome" name="nome"  onChange={(e) => { setNome(e.target.value) }} required/>
              <Input label="Cpf" name="cpf"  onChange={(e) => { setCpf(e.target.value) }} required/>
              <Input label="Email" name="email"  onChange={(e) => { setEmail(e.target.value) }} required/>
              <Button background="#0275d8" onClick={handleSwitch}>Próximo</Button>
            </FormField>
          }
          {switchForm2 &&
          
            <FormField>
              <legend>
                <TitleFormField>Endereço</TitleFormField>
              </legend>
              <ContainerInput>
                <Input label="Cep" name="cep"  onChange={(e) => { setCep(e.target.value) }} required/>
                <Input label="Bairro" name="bairro"  onChange={(e) => { setBairro(e.target.value) }} required/>
              </ContainerInput>
              <ContainerInput>
                <Input label="Rua" name="rua"  onChange={(e) => { setRua(e.target.value) }} required/>
                <Input label="Nº" name="numero"  onChange={(e) => { setNumero(e.target.value) }} required/>
              </ContainerInput>
              <Input label="Cidade" name="cidade"  onChange={(e) => { setCidade(e.target.value) }} required/>
              <ContainerButton>
                <Button background="#0275d8" onClick={handleSwitch}>Voltar</Button>
                <Button background="#5FbF7F" type="submit">Finalizar</Button>
              </ContainerButton>

            </FormField>
          }

        </Form>

      </ContainerForm>
    </Container>
  )
}
