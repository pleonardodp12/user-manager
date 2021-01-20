import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Input from '../../components/Input';
import api from '../../services/api';
import { cepMask, cpfMask } from '../../utils/masks';
import validateEmail from '../../utils/validateEmail';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { Container, ContainerForm, Form, FormField, ContainerInput, ErrorDescription, ContainerButton, TitleFormField, Button } from './styles';

export default function NewUser() {
  const history = useHistory();
  const [switchForm1, setSwitchForm1] = useState(true);
  const [switchForm2, setSwitchForm2] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const [errorStepTwo, setErrorStepTwo] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [nome, setNome]=useState("");
  const [cpf, setCpf]=useState("");
  const [email, setEmail]=useState("");
  const [cep, setCep]=useState("");
  const [rua, setRua]=useState("");
  const [numero, setNumero]=useState("");
  const [bairro, setBairro]=useState("");
  const [cidade, setCidade]=useState("");

  function handleSwitch(){
    if (isValid){
      setSwitchForm1((prevState) => !prevState);
      setSwitchForm2((prevState) => !prevState);
    };
    return;
  };

  function setFocusToNumberField(){
    document.getElementById("numero").focus();
  }

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
      setFocusToNumberField();
  }

  useEffect(() => {
    if (nome === ""){
      setError("Preencha o campo nome");
      setIsValid(false)
    } else if (email === ""){
      setError("Preencha o campo de email");
      setIsValid(false)
    } else if (!validateEmail(email)){
      setError("Email inválido");
      setIsValid(false)
    } else if (cpf === "" || cpf.length !== 14){
      setError("Cpf inválido");
      setIsValid(false)
    } else {
      setError('')
      console.log(error)
      setIsValid(true)
    }
  }, [email, cpf, nome]);

  useEffect(() => {
    if (cep === "" || bairro === "" || cidade === "" || rua === "" || numero === ""){
      setErrorStepTwo("Preencha todos os campos");
      setIsValid(false)
    } else {
      setErrorStepTwo('')
      console.log(error)
      setIsValid(true)
    }
  }, [cep, bairro, cidade, rua, numero]);

  function verifyError(e){
    const { target } = e;
    if (target){
      setShowError(true);
    }
  }
  function hiddenError(e){
    const {target } = e;
    if (target) {
      setShowError(false);
    }
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
                {showError && <ErrorDescription>{error}</ErrorDescription>}
                {error && <BsQuestionCircleFill
                  color="#d9534f"
                  size={20}
                  onMouseOver={(e) => verifyError(e)}
                  onMouseOut={(e) => hiddenError(e)}
                />
                }
              </legend>
              <Input label="Nome" name="nome" value={nome} onChange={(e) => { setNome(e.target.value) }} required />
              <Input label="CPF" name="cpf" maxLength={14} value={cpfMask(cpf)} onChange={(e) => { setCpf(e.target.value) }} required />
              <Input label="Email" name="email" value={email || ""} onChange={(e) => { setEmail(e.target.value) }} required/>
              {!error
                ? <Button background="#0275d8"onClick={handleSwitch}>
                    Próximo
                  </Button>
                : <Button background="#0275d8"onClick={handleSwitch} disabled={!isValid}>
                    ?
                  </Button>
              }
              
            </FormField>
          }
          {switchForm2 &&
          
            <FormField>
              <legend>
                <TitleFormField>Endereço</TitleFormField>
                {showError && <ErrorDescription>{errorStepTwo}</ErrorDescription>}
                {errorStepTwo && <BsQuestionCircleFill
                  color="#d9534f"
                  size={20}
                  onMouseOver={(e) => verifyError(e)}
                  onMouseOut={(e) => hiddenError(e)}
                />
                }
              </legend>
              <ContainerInput>
                <Input label="Cep" name="cep" maxLength={9} value={cepMask(cep)} onChange={(e) => { setCep(e.target.value) }} onBlur={(ev)=>onBlurCep(ev)} required/>
                <Input label="Bairro" name="bairro" value={bairro} id="bairro" onChange={(e) => { setBairro(e.target.value) }} required/>
              </ContainerInput>
              <ContainerInput>
                <Input label="Rua" name="rua" id="rua" value={rua} onChange={(e) => { setRua(e.target.value) }} required/>
                <Input label="Nº" name="numero" value={numero} onChange={(e) => { setNumero(e.target.value) }} required/>
              </ContainerInput>
              <Input label="Cidade" name="cidade" value={cidade} id="cidade" onChange={(e) => { setCidade(e.target.value) }} required/>
              <ContainerButton>
                <Button background="#0275d8" onClick={handleSwitch}>Voltar</Button>
                {!errorStepTwo
                  ? <Button
                      background="#5FbF7F"
                      type="submit"
                    >
                      Finalizar
                    </Button>
                  : <Button background="#5FbF7F" disabled={!isValid}>
                      ?
                    </Button>
              }
              </ContainerButton>

            </FormField>
          }

        </Form>

      </ContainerForm>
    </Container>
  )
}
