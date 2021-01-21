import React, { useRef, useState } from "react"
import {
  Card,
  CardBody,
  TitleCardBody,
  ButtonConfirm,
  Form,
  CreateAccountText,
  LoginText,
  SuccessMessage,
  ErrorMessage
} from '../../assets/styles/SharedStyle/styles';
import Input from '../../components/Input';
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext";

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Verifique seu email e siga as instruções")
    } catch {
      setError("Erro ao resetar senha")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <CardBody>
          <TitleCardBody>Esqueci a senha</TitleCardBody>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {message && <SuccessMessage>{message}</SuccessMessage>}
          <Form onSubmit={handleSubmit}>
            <Input
              label="Email"
              name="email"
              type="email"
              required
              ref={emailRef}
            />
            <ButtonConfirm disabled={loading} type="submit">Resetar senha</ButtonConfirm>
          </Form>
          <LoginText>
            <Link to="/entrar">Login</Link>
          </LoginText>
        </CardBody>
        <CreateAccountText>Não tem cadastro?
          {" "}
          <Link to='/cadastro'>Criar conta</Link>
        </CreateAccountText>
      </Card>
    </>
  )
}
