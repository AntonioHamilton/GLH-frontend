import React from 'react';
import { Container, WrapParceiros, Parceiro, Title } from './style';

const Parceiros = () => {
  return (
    <Container>
      <Title>Nossos Parceiros</Title>
      <WrapParceiros>
        <Parceiro src="http://www.almlaw.com.br/img/topo_190914_0101_02.jpg" />
        <Parceiro src="http://www.almlaw.com.br/img/topo_190914_0101_02.jpg" />
        <Parceiro src="http://www.almlaw.com.br/img/topo_190914_0101_02.jpg" />
      </WrapParceiros>
    </Container>
  );
};

export default Parceiros;
