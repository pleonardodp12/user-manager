import React, { useState }  from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { cepMask, cpfMask } from '../../utils/masks';
import {
  ContainerForm,
  Form,
  FormField,
  ContainerInput,
  ContainerButton,
  TitleFormField,
  Button,
  FormGroup,
  Label,
  Input
} from './styles';
import Loading from '../Loading';

export default function FormEditComponent({ user }) {
  const history = useHistory();
  const [switchForm1, setSwitchForm1] = useState(true);
  const [switchForm2, setSwitchForm2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editUser, setEditUser] = useState(...user);
  console.log("edituser",editUser)

  // const onChange = e => {
  //   const { value, name } = e.target;
  //   setEditUser({...user, [name]:value});
  // };

  function handleSwitch(){
    setSwitchForm1((prevState) => !prevState);
    setSwitchForm2((prevState) => !prevState);
  };

  function setFocusToNumberField(){
    document.getElementById("numero").focus();
  }

  async function handleSubmitNewUser(id, e){
    e.preventDefault();
    setLoading(true);
    api.put(`usuarios/${id}`, {
        editUser
    }).then(() => {
      setLoading(false);
      alert('Cadastro realizado com sucesso');
      history.push('/usuarios');
    }).catch(() => {
      setLoading(false);
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
        setEditUser({...editUser, endereco: { rua: data?.logradouro }});
        setEditUser({...editUser, endereco: { bairro: data?.bairro }});
        setEditUser({...editUser, endereco: { cidade: data?.localidade }});
        document.getElementById('rua').value=(data.logradouro);
        document.getElementById('bairro').value=(data.bairro);
        document.getElementById('cidade').value=(data.localidade);
      });
      setFocusToNumberField();
  }

  return (
    <>
    {loading
      ? (<Loading></Loading>)
      : (<ContainerForm>
          <Form onSubmit={handleSubmitNewUser}>
          {switchForm1 &&
            <FormField>
              <legend>
                <TitleFormField>Atualizar dados</TitleFormField>
              </legend>
              {console.log("Nome",editUser.nome)}
              <FormGroup>
                  <Label>Nome</Label>
                  <Input name="nome" id="nome" value={editUser.nome} onChange={(e) => {setEditUser({...editUser, nome: e.target.value })}} required />
              </FormGroup>

              <FormGroup>
                <Label>CPF</Label>
                <Input name="cpf" maxLength={14} value={cpfMask(editUser.cpf)} onChange={(e) => {setEditUser({...editUser, cpf: e.target.value })}} required/>
              </FormGroup>

              <FormGroup>
                <Label>Email</Label>
                <Input name="email" value={editUser.email || ""} onChange={(e) => {setEditUser({...editUser, email: e.target.value })}} required/>
              </FormGroup>

              <Button background="#0275d8"onClick={handleSwitch}>
                Próximo
              </Button>
            </FormField>
          }
          {switchForm2 &&
          
            <FormField>
              <legend>
                <TitleFormField>Atualizar endereço</TitleFormField>
                
              </legend>
              <ContainerInput>
                <FormGroup>
                  <Label>Cep</Label>
                  <Input name="cep" maxLength={9} value={cepMask(editUser.endereco?.cep)} onChange={(e) => {setEditUser({...editUser, endereco: { cep: e.target.value }})}} onBlur={(ev)=>onBlurCep(ev)} required />
                </FormGroup>
                <FormGroup>
                  <Label>Bairro</Label>
                  <Input name="bairro" value={editUser.endereco?.bairro} id="bairro" onChange={(e) => {setEditUser({...editUser, endereco: { bairro: e.target.value }})}} required/>
                </FormGroup>
              </ContainerInput>

              <ContainerInput>
                <FormGroup>
                  <Label>Rua</Label>
                  <Input name="rua" id="rua" value={editUser.endereco?.rua} onChange={(e) => {setEditUser({...editUser, endereco: { rua: e.target.value }})}} required/>
                </FormGroup>

                <FormGroup>
                  <Label>Nº</Label>
                  <Input name="numero" value={editUser.endereco?.numero} id="numero" onChange={(e) => {setEditUser({...editUser, endereco: { numero: e.target.value }})}} required/>
                </FormGroup>
              </ContainerInput>

                <FormGroup>
                  <Label>Cidade</Label>
                  <Input name="cidade" value={editUser.endereco?.cidade} id="cidade" onChange={(e) => {setEditUser({...editUser, endereco: { cidade: e.target.value }})}} required/>
                </FormGroup>
              <ContainerButton>
                <Button background="#0275d8" onClick={handleSwitch}>Voltar</Button>
                <Button
                      background="#5FbF7F"
                      type="submit"
                >
                  Finalizar
                </Button>
              </ContainerButton>
            </FormField>
          }
        </Form>
      </ContainerForm>)
    }
    </>
    
  );
};
