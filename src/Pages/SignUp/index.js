import React from 'react';
import {Card, CardBody, TitleCardBody, Form, ButtonConfirm, Line} from './styles';


const Signup = () => {

  return (
    <Card>
      <CardBody>
        <TitleCardBody>Crie sua conta</TitleCardBody>
        <Form>
         
          <ButtonConfirm>Cadastrar</ButtonConfirm>
          <Line></Line>
          <span>Não tem cadastro? <strong>Criar conta</strong></span>
        </Form>
      </CardBody>
      
    </Card>
  )
}

export default Signup;