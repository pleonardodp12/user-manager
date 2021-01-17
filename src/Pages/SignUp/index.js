import React from 'react';
import InputComponent from '../../components/InputComponent';
import {Card, CardBody, TitleCardBody, Form, ButtonConfirm, Line} from './styles';


const Signup = () => {

  return (
    <Card>
      <CardBody>
        <TitleCardBody>Crie sua conta</TitleCardBody>
        <Form>
          <InputComponent label="Email" name="email" required type="email" />
          <InputComponent label="Senha" name="password" required type="password" />
          <InputComponent label="Confirmação de senha" name="confirmPassword" required type="password" />
          <ButtonConfirm>Cadastrar</ButtonConfirm>
          <Line></Line>
          <span>Não tem cadastro? <strong>Criar conta</strong></span>
        </Form>
      </CardBody>
      
    </Card>
  )
}

export default Signup;