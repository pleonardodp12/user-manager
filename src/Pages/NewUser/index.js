import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Input from '../../components/Input';
import api from '../../services/api';
import { cepMask, cpfMask } from '../../utils/masks';
import validateEmail from '../../utils/validateEmail';
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
      history.push('/usuarios');
    }).catch(() => {
      alert('Erro no cadastro');
    });
  };

  function onBlurCep(ev) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setRua(data.logradouro)
        setBairro(data.bairro)
        setCidade(data.localidade)
        document.getElementById('rua').value=(data.logradouro);
        document.getElementById('bairro').value=(data.bairro);
        document.getElementById('cidade').value=(data.localidade);
      });
  }

  function validateFields(email){
    if (!validateEmail(email)){
      console.log("email não valido")
    } else {
      console.log("email valido")
    }
  }
  validateFields(email)

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
              <Input label="Nome" name="nome" onChange={(e) => { setNome(e.target.value) }} required/>
              <Input label="Cpf" name="cpf" value={cpfMask(cpf)} onChange={(e) => { setCpf(e.target.value) }} required/>
              <Input label="Email" name="email" onChange={(e) => { setEmail(e.target.value) }} required/>
              <Button background="#0275d8" onClick={handleSwitch}>Próximo</Button>
            </FormField>
          }
          {switchForm2 &&
          
            <FormField>
              <legend>
                <TitleFormField>Endereço</TitleFormField>
              </legend>
              <ContainerInput>
                <Input label="Cep" name="cep" value={cepMask(cep)} onChange={(e) => { setCep(e.target.value) }} onBlur={(ev)=>onBlurCep(ev)} required/>
                <Input label="Bairro" name="bairro" id="bairro" onChange={(e) => { setBairro(e.target.value) }} required/>
              </ContainerInput>
              <ContainerInput>
                <Input label="Rua" name="rua" id="rua" onChange={(e) => { setRua(e.target.value) }} required/>
                <Input label="Nº" name="numero" onChange={(e) => { setNumero(e.target.value) }} required/>
              </ContainerInput>
              <Input label="Cidade" name="cidade" id="cidade" onChange={(e) => { setCidade(e.target.value) }} required/>
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
