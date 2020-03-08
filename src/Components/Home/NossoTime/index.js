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
          The purpose of lorem ipsum is to create a natural looking block of
          text (sentence, paragraph, page, etc.) that doesn't distract from the
          layout. A practice not without controversy, laying out pages with
          meaningless filler text can be very useful when the focus is meant to
          be on design, not content. The passage experienced a surge in
          popularity during the 1960s when Letraset used it on their
          dry-transfer sheets, and again during the 90s as desktop publishers
          bundled the text with their software. Today it's seen all around the
          web; on templates, websites, and stock designs. Use our generator to
          get your own, or read on for the authoritative history of lorem ipsum.
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
