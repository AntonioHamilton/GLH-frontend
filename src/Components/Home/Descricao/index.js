import React from 'react';

import { IconContext } from 'react-icons';
import { AiOutlineSafety } from 'react-icons/ai';
import { TiGroupOutline } from 'react-icons/ti';
import { IoIosLeaf, IoIosRocket } from 'react-icons/io';
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
        Uma plataforma de orientação jurídica para StartUP, 
        onde você encontra tudo sobre a área jurídica da sua StartUP, 
        desde da fase de ideação até a tração, com planos gratuitos
        para StartUP em fase de ideação.
        Uma plataforma de orientação jurídica onde você encontra
        tranquilidade para a sua ideia de negócio e segurança 
        para o crescimento da sua startup. 

        Tranquilidade para começar, segurança para crescer!

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
              <AiOutlineSafety />
            </Icon>
          </IconContext.Provider>
          <Title>Segurança</Title>
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
              <TiGroupOutline/>
            </Icon>
          </IconContext.Provider>
          <Title>Sinergia</Title>
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
              <IoIosLeaf />
            </Icon>
          </IconContext.Provider>
          <Title>Simplicidade</Title>
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
              <IoIosRocket />
            </Icon>
          </IconContext.Provider>
          <Title>Inovação</Title>
          <Description>teste</Description>
        </Card>
      </WrapCards>
    </Container>
  );
};

export default Descricao;
