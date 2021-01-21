import React, { useEffect, useState }  from 'react';
import Input from '../../components/Input';
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
  Button
} from './styles';

export default function FormEditComponent({ user }) {
  const history = useHistory();
  const [switchForm1, setSwitchForm1] = useState(true);
  const [switchForm2, setSwitchForm2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nome, setNome]=useState("");
  const [cpf, setCpf]=useState("");
  const [email, setEmail]=useState("");
  const [cep, setCep]=useState("");
  const [rua, setRua]=useState("");
  const [numero, setNumero]=useState("");
  const [bairro, setBairro]=useState("");
  const [cidade, setCidade]=useState("");
  const [editUser, setEditUser] = useState(...user);
  console.log("edituser",editUser)

  const onChange = e => {
    const { value } = e.target;
    setEditUser(...user, value);
  };

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
        setRua(data?.logradouro)
        setBairro(data?.bairro)
        setCidade(data?.localidade)
        document.getElementById('rua').value=(data.logradouro);
        document.getElementById('bairro').value=(data.bairro);
        document.getElementById('cidade').value=(data.localidade);
      });
      setFocusToNumberField();
  }

  return (
    <ContainerForm>
      <Form onSubmit={handleSubmitNewUser}>
      {switchForm1 &&
        <FormField>
          <legend>
            <TitleFormField>Atualizar dados</TitleFormField>
          </legend>
          {console.log("Nome",editUser.nome)}
          <Input label="Nome" name="nome" value={editUser.nome} onChange={onChange} required />
          <Input label="CPF" name="cpf" maxLength={14} value={cpfMask(editUser.cpf)} onChange={onChange} required />
          <Input label="Email" name="email" value={editUser.email} onChange={onChange} required/>
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
            <Input label="Cep" name="cep" maxLength={9} value={cepMask(editUser.endereco?.cep)} onChange={onChange} onBlur={(ev)=>onBlurCep(ev)} required/>
            <Input label="Bairro" name="bairro" value={editUser.endereco.bairro} id="bairro" onChange={onChange} required/>
          </ContainerInput>
          <ContainerInput>
            <Input label="Rua" name="rua" id="rua" value={editUser.endereco.rua} onChange={onChange} required/>
            <Input label="Nº" name="numero" value={editUser.endereco.numero} onChange={onChange} required/>
          </ContainerInput>
          <Input label="Cidade" name="cidade" value={editUser.endereco.cidade} id="cidade" onChange={onChange} required/>
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
  </ContainerForm>
  );
};
