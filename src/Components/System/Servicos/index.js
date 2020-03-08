import React, { useState } from 'react';

import {
  Container,
  WrapContainer,
  WrapService,
  Title,
  Icon,
  Button,
  WrapAgendar,
  Microservices,
  Choices,
  WrapContent,
  CloseButton,
  WrapInput,
} from './style';

const servicos = [
  'Criação de contrato',
  'Revisão de contrato',
  'Registro de Software no INPI',
  'Reuniões presenciais',
  'Abertura de empresas no Exterior',
];

const dadosMicroservicos = [
  {
    nome: 'Descrição do problema',
    id: 'description',
    type: 'text',
    style: { width: '40vw', height: '10vh' },
  },
  { nome: 'Prazo', id: 'prazo', type: 'date', style: {} },
];

const Servicos = () => {
  const EnvioForm = () => {
    alert('O formulário foi enviado! Iremos lhe enviar uma resposta em breve');
    window.location = '/sistema';
  };

  const [agendar, setAgendar] = useState(false);

  return (
    <Container>
      <WrapContainer>
        <WrapService>
          <Title>Escolha seus serviços</Title>
          <Button>
            <Icon src="https://static.thenounproject.com/png/257639-200.png" />
          </Button>
        </WrapService>
        <WrapService>
          <Title>Agende uma Consultoria</Title>
          <Button onClick={() => setAgendar(true)}>
            <Icon src="https://static.thenounproject.com/png/552567-200.png" />
          </Button>
        </WrapService>
      </WrapContainer>
      <WrapAgendar active={agendar}>
        <CloseButton
          onClick={() => setAgendar(false)}
          src="https://pngimage.net/wp-content/uploads/2018/06/x-icon-white-png-5.png"
        />
        <WrapContent>
          <p>Escolha seu serviço</p>
          <input
            style={{
              borderRadius: '10px',
              border: 'none',
              width: '20vw',
              padding: '10px',
              fontSize: '20px',
            }}
            list="microservicos"
            placeholder="Escolha o serviço"
          />
          <Microservices id="microservicos">
            {servicos.map((item, index) => (
              <>
                <Choices value={item} />
              </>
            ))}
          </Microservices>
          {dadosMicroservicos.map(item => (
            <WrapInput>
              <p style={{ margin: '10px 0px -15px 0px' }}>{item.nome}</p>
              <input
                id={item.id}
                type={item.type}
                placeholder={item.nome}
                style={item.style}
              />
            </WrapInput>
          ))}
          <Button onClick={() => EnvioForm()}>
            <a
              style={{
                color: 'white',
                border: 'none',
                padding: '10px',
                fontSize: '18px',
                background: 'rgb(232, 75, 55)',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              Enviar
            </a>
          </Button>
        </WrapContent>
      </WrapAgendar>
    </Container>
  );
};

export default Servicos;
