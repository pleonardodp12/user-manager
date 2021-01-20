import React from 'react';
import { LoadingAnimation, Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <LoadingAnimation>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoadingAnimation>
    </Container>
  );
};
