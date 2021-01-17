import React, { useRef, useState } from "react"
import { Card, CardBody, TitleCardBody, ButtonConfirm, Form, CreateAccountText, LoginText} from '../../styles/SharedStyle/styles';
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
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <CardBody>
          <TitleCardBody>Esqueci a senha</TitleCardBody>
          {error && <h2>{error}</h2>}
          {message && <h2>{message}</h2>}
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
            <Link to="/login">Login</Link>
          </LoginText>
        </CardBody>
        <CreateAccountText>Não tem cadastro?
          {" "}
          <Link to='/signup'>Criar conta</Link>
        </CreateAccountText>
      </Card>
    </>
  )
}
