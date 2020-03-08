import React from 'react';

import { TitleContainer } from '../../Home/Descricao/style';

import { Container, WrapInfo, QtdPontos, Servico } from './style';

let infoPontos = [
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '2 a 5',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
];

const Pontos = () => {
  return (
    <Container>
      <TitleContainer style={{ padding: '20px 0px' }}>
        SAIBA COMO GASTAR SEUS PONTOS
      </TitleContainer>
      <WrapInfo>
        {infoPontos.map((item, index) => (
          <div
            style={{
              background: '#004aad',
              padding: '0px 5px',
              borderRadius: '5px',
              color: '#fff',
            }}
            key={index}
          >
            <QtdPontos>{item.qtd_pontos} pontos</QtdPontos>
            <Servico>{item.servico}</Servico>
          </div>
        ))}
      </WrapInfo>
    </Container>
  );
};

export default Pontos;
