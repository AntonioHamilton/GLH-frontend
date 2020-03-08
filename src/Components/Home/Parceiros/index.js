import React from 'react';
import {Container, Parceiros, Parceiro, Title} from './style'


const Parceiros = () => {
  return (
    <Container>
        <Title>Nossos Parceiros</Title>
        <Parceiros>
            <Parceiro src={'http://www.almlaw.com.br/'}/>
            <Parceiro src={'http://www.almlaw.com.br/'}/>
            <Parceiro src={'http://www.almlaw.com.br/'}/>
        </Parceiros>
    </Container>
  );
};

export default Parceiros;