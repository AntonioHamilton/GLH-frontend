import React from 'react';

import { IconContext } from 'react-icons';
import { GiArcheryTarget } from 'react-icons/gi';

import {
  Container,
  TitleContainer,
  Card,
  Title,
  Description,
  DescriptionContainer,
  WrapCards,
  WrapContent,
  Icon,
} from './style';

const Descricao = () => {
  return (
    <Container>
      <WrapContent>
        <TitleContainer>Sobre nós</TitleContainer>
        <DescriptionContainer>
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
        </DescriptionContainer>
      </WrapContent>
      <WrapCards>
        <Card>
          <IconContext.Provider
            value={{
              color: '#ff1616',
              className: 'global-class-name',
              size: '4em',
            }}
          >
            <Icon>
              <GiArcheryTarget />
            </Icon>
          </IconContext.Provider>
          <Title>teste</Title>
          <Description>teste</Description>
        </Card>
        <Card>
          <IconContext.Provider
            value={{
              color: '#ff1616',
              className: 'global-class-name',
              size: '4em',
            }}
          >
            <Icon>
              <GiArcheryTarget />
            </Icon>
          </IconContext.Provider>
          <Title>teste</Title>
          <Description>
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn't distract from
            the layout. A practice not without controversy, laying
          </Description>
        </Card>
        <Card>
          <IconContext.Provider
            value={{
              color: '#ff1616',
              className: 'global-class-name',
              size: '4em',
            }}
          >
            <Icon>
              <GiArcheryTarget />
            </Icon>
          </IconContext.Provider>
          <Title>teste</Title>
          <Description>teste</Description>
        </Card>
        <Card>
          <IconContext.Provider
            value={{
              color: '#ff1616',
              className: 'global-class-name',
              size: '4em',
            }}
          >
            <Icon>
              <GiArcheryTarget />
            </Icon>
          </IconContext.Provider>
          <Title>teste</Title>
          <Description>teste</Description>
        </Card>
      </WrapCards>
    </Container>
  );
};

export default Descricao;
