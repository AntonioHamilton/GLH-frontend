import React from 'react';
import {Container, Colaborador, Colaboradores, Title} from './style'


const Parceiros = () => {
  return (
    <Container>
        <Title>Nossos Parceiros</Title>
        <Colaboradores>
            <Colaborador src={'http://www.almlaw.com.br/img/topo_190914_0101_02.jpg'}/>
            <Colaborador src={'http://www.almlaw.com.br/img/topo_190914_0101_02.jpg'}/>
            <Colaborador src={'http://www.almlaw.com.br/img/topo_190914_0101_02.jpg'}/>
        </Colaboradores>
    </Container>
  );
};

export default Parceiros;