import React, { forwardRef } from 'react';
import { FormGroup, FormInput, FormLabel } from './styles';

const Input = forwardRef(({ label, name, ...rest }, ref) => (
  <FormGroup>
      <FormLabel>{label}</FormLabel>
      <FormInput id={name} ref={ref} {...rest} />
    </FormGroup>
));

export default Input;