import React from 'react';

import Header from '../../components/Header';
import { Container } from './styles';
import FormComponent from '../../components/FormComponent';

export default function NewUser() {
  

  return (
    <Container>
      <Header />
        <FormComponent
          fieldTitleOneStep="Dados"
          fieldTItleSecondStep="Endereço"
          editDetails={true}
        />
    </Container>
  )
}
