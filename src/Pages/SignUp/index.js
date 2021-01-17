import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputComponent from '../../components/InputComponent';
import { useAuth } from '../../contexts/AuthContext';
import {Card, CardBody, TitleCardBody, Form, ButtonConfirm, Line} from './styles';


const Signup = () => {const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }


  return (
    <Card>
      <CardBody>
        <TitleCardBody>Crie sua conta</TitleCardBody>
        {error && <h1>Erro: {error}</h1>}
        <Form onSubmit={handleSubmit}>
          <InputComponent
            label="Email"
            name="email"
            type="email"
            required
            ref={emailRef}
          />

          <InputComponent
            label="Senha"
            name="password"
            type="password"
            required
            ref={passwordRef}
          />

          <InputComponent
            label="Confirmação de senha"
            name="confirmPassword"
            type="password"
            required
            ref={passwordConfirmRef}
          />

          <ButtonConfirm type="submit" disabled={loading} >Cadastrar</ButtonConfirm>
          <Line></Line>
          <span>Não tem cadastro?
            <Link to="/login">
              <strong>Criar conta</strong>
            </Link>
          </span>
        </Form>
      </CardBody>
      
    </Card>
  )
}

export default Signup;