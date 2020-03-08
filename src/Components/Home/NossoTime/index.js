import React from 'react';

import {
  Container,
  Title,
  Description,
  WrapContent,
  WrapCardContent,
  Cards,
  Card,
  Image,
  TitleCard,
  DescriptionCard,
  WrapInfo,
} from './style';

const infoCard = [
  {
    name: 'Teste',
    specialization: ['Financeiro'],
    image:
      'https://www.rochadvogados.com.br/wp-content/uploads/2019/01/advogado-rafael-223x300.jpg',
    telephone: '(79) 99999-9999',
  },
  {
    name: 'Teste',
    specialization: ['Financeiro'],
    image:
      'https://www.rochadvogados.com.br/wp-content/uploads/2019/01/advogado-rafael-223x300.jpg',
    telephone: '(79) 99999-9999',
  },
  {
    name: 'Teste',
    specialization: ['Financeiro'],
    image:
      'https://www.rochadvogados.com.br/wp-content/uploads/2019/01/advogado-rafael-223x300.jpg',
    telephone: '(79) 99999-9999',
  },
  {
    name: 'Teste',
    specialization: ['Financeiro'],
    image:
      'https://www.rochadvogados.com.br/wp-content/uploads/2019/01/advogado-rafael-223x300.jpg',
    telephone: '(79) 99999-9999',
  },
];

const NossoTime = () => {
  return (
    <Container>
      <WrapInfo>
        <Title>Nosso Time</Title>
        <Description>
          Nosso time está sempre pronto e capacitado para atender as suas
          necessidades. Apenas os melhores do mercado!
        </Description>
      </WrapInfo>
      <Cards>
        {infoCard.map((item, index) => {
          return (
            <Card key={index}>
              <Image src={item.image} />
              <WrapCardContent>
                <WrapContent>
                  <TitleCard>{item.name}</TitleCard>
                  {item.specialization.map((item, index) => (
                    <DescriptionCard key={index}>{item}</DescriptionCard>
                  ))}
                  <DescriptionCard>{item.telephone}</DescriptionCard>
                </WrapContent>
              </WrapCardContent>
            </Card>
          );
        })}
      </Cards>
    </Container>
  );
};

export default NossoTime;
