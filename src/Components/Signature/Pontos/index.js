import React from 'react';

import { TitleContainer } from '../../Home/Descricao/style';

import { Container, WrapInfo, QtdPontos, Servico } from './style';

let infoPontos = [
  {
    qtd_pontos: '2 a 4 pontos',
    servico: '• Reuniões presenciais',
  },
  {
    qtd_pontos: '2 a 5 pontos',
    servico: 'Revisão de material publicitário (folders, vídeos, etc...)',
  },
  {
    qtd_pontos: '4 a 8 pontos',
    servico:
      'Revisão (contrato elaborado pela outra parte, apenas para revisão dosaspectos legais)',
  },
  {
    qtd_pontos: '6 a 8 pontos',
    servico: 'Política de Privacidade sites',
  },
  {
    qtd_pontos: '9 a 12 pontos',
    servico: 'Termos de Uso para sites',
  },
  {
    qtd_pontos: '10 a 20 pontos',
    servico: 'Defesa em procedimentos/autuações administrativas',
  },
  {
    qtd_pontos: '12 pontos',
    servico:
      'Aprovação de Promoções Comerciais e Concursos na CEF (elaboração de Regulamento e todos os documentos)',
  },
  {
    qtd_pontos: '13 a 20 pontos',
    servico: 'Abertura de empresas no Exterior',
  },
  {
    qtd_pontos: '9 pontos',
    servico: 'Averbação de Contratos no INPI',
  },
  {
    qtd_pontos: '11 a 17 pontos',
    servico: 'Elaboração (Elaboração total do contrato)',
  },
  {
    qtd_pontos: '7 a 9 pontos',
    servico: 'Política de Compliance (KYC e AML)',
  },
  {
    qtd_pontos: '6 pontos',
    servico: 'Workshops “in company',
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
            <QtdPontos>{item.qtd_pontos}</QtdPontos>
            <Servico>{item.servico}</Servico>
          </div>
        ))}
      </WrapInfo>
    </Container>
  );
};

export default Pontos;
