import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Container, Form, FormSection, TitleFormSection } from './styles';

export default function NewUser() {
  return (
    <Container>
      <Header />
      <Form>
        <FormSection>
          <legend>
            <TitleFormSection>Dados usuário</TitleFormSection>
          </legend>
          <Input
            name="nome"
            placeholder="Nome"
            type="text"
            required
          />
          <Input
            placeholder="Cpf"
            name="cpf"
            type="text"
            required
          />
          <Input
            placeholder="Email"
            name="email"
            type="email"
            required
          />
        </FormSection>

        <FormSection>
          <legend>
            <TitleFormSection>Endereço</TitleFormSection>
          </legend>
          <Input
            placeholder="Cep"
            name="cep"
            type="text"
            required
          />
          <Input
            placeholder="Rua"
            name="rua"
            type="text"
            required
          />
          <Input
            placeholder="Nº"
            name="numero"
            type="text"
            required
          />
          <Input
            placeholder="Bairro"
            name="bairro"
            type="text"
            required
          />

          <Input
            placeholder="Cidade"
            name="cidade"
            type="text"
            required
          />
        </FormSection>
        
      </Form>
    </Container>
  )
}
