import React from 'react';

import {
  Container,
  Title,
  Description,
  Cards,
  Card,
  Image,
  TitleCard,
  Specialization,
  Number,
} from './style';

const infoCard = [
  {
    name: 'Antonio',
    specialization: 'Financeiro',
    image:
      'https://www.rochadvogados.com.br/wp-content/uploads/2019/01/advogado-rafael-223x300.jpg',
    telephone: '(79) 99999-9999',
  },
  {
    name: 'Antonio',
    specialization: 'Financeiro',
    image:
      'https://www.rochadvogados.com.br/wp-content/uploads/2019/01/advogado-rafael-223x300.jpg',
    telephone: '(79) 99999-9999',
  },
  {
    name: 'Antonio',
    specialization: 'Financeiro',
    image:
      'https://www.rochadvogados.com.br/wp-content/uploads/2019/01/advogado-rafael-223x300.jpg',
    telephone: '(79) 99999-9999',
  },
  {
    name: 'Antonio',
    specialization: 'Financeiro',
    image:
      'https://www.rochadvogados.com.br/wp-content/uploads/2019/01/advogado-rafael-223x300.jpg',
    telephone: '(79) 99999-9999',
  },
];

const NossoTime = () => {
  return (
    <Container>
      <Title>Nosso Time</Title>
      <Description>
        Nosso time está sempre pronto e capacitado para atender as suas
        necessidades. Apenas os melhores do mercado!
      </Description>
      <Cards>
        {infoCard.map(item => {
          <Card>
            <Image src={item.image} />
            <TitleCard>{item.name}</TitleCard>
            <Specialization>{item.specialization}</Specialization>
            <Number>{item.telephone}</Number>
          </Card>;
        })}
      </Cards>
    </Container>
  );
};

export default NossoTime;
