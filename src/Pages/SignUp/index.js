import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import { useToasts } from 'react-toast-notifications';
import {
  Card,
  CardBody,
  TitleCardBody,
  Form,
  ButtonConfirm,
  LoginText,
  ErrorMessage
} from '../../assets/styles/SharedStyle/styles';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { addToast } = useToasts();

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Senhas diferentes")
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Erro ao criar conta")
      addToast(error, {
        appearance: 'error',
        autoDismiss: true,
      });
    };
    setLoading(false);
  }

  return (
    <Card>
      <CardBody>
        <TitleCardBody>Crie sua conta</TitleCardBody>
        {error && <ErrorMessage>Erro: {error}</ErrorMessage>}
        <Form onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            ref={emailRef}
            required
          />

          <Input
            label="Senha"
            name="password"
            type="password"
            ref={passwordRef}
            required
          />
          
          <Input
            label="Confirmação de senha"
            name="confirmPassword"
            type="password"
            ref={passwordConfirmRef}
            required
          />

          <ButtonConfirm disabled={loading} type="submit">Cadastrar</ButtonConfirm>
        </Form>
  
      </CardBody>

      <LoginText>Ja tem conta?
        {" "}
        <Link to='/entrar'>Entrar</Link>
      </LoginText>
    </Card>
    
  )
}