import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Input from '../../components/Input';
import {
  Card,
  CardBody,
  TitleCardBody,
  Form,
  ButtonConfirm,
  CreateAccountText,
  ForgotPasswordText,
  ErrorMessage
} from '../../assets/styles/SharedStyle/styles';

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/usuarios")
    } catch {
      setError("Erro no login")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <CardBody>
          <TitleCardBody>Entrar</TitleCardBody>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Form onSubmit={handleSubmit}>
          <Input
              label="Email"
              name="email"
              type="email"
              required
              ref={emailRef}
            />
            <Input
              label="Senha"
              name="password"
              type="password"
              required
              ref={passwordRef}
            />

            <ButtonConfirm disabled={loading} type="submit">
              Entrar
            </ButtonConfirm>
          </Form>
          <ForgotPasswordText>
            <Link to="/senha-esquecida">Esqueceu a senha?</Link>
          </ForgotPasswordText>
        </CardBody>
        <CreateAccountText>
          Não tem uma conta?
          {" "}
          <Link to="/cadastro">Criar</Link>
        </CreateAccountText>
      </Card>
    </>
  )
}
