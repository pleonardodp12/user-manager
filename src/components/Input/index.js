import React from 'react';
import { FormGroup, FormInput, FormLabel } from './styles';

export default function Input ({ label, name, ...rest }) {
  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      <FormInput id={name} {...rest} />
    </FormGroup>
  );
};