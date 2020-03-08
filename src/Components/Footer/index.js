import React from 'react';

import {
  Container,
  WrapContent,
  Content,
  Item,
  Copy,
  Image,
  TituloItem,
  ContentMiddle,
  ItemMiddle,
} from './style';

const Footer = () => {
  return (
    <Container>
      <WrapContent>
        <Content>
          <Image
            src="https://image.flaticon.com/icons/png/512/20/20385.png"
            style={{ marginBottom: '20px', marginTop: '20px' }}
          />
          <Item>TESTE</Item>
          <Item>TESTE</Item>
          <Item>TESTE</Item>
        </Content>
        <Content>
          <TituloItem style={{ marginBottom: '30px' }}>Novidades</TituloItem>
          <ContentMiddle>
            <ItemMiddle>TESTE</ItemMiddle>
            <ItemMiddle>TESTE</ItemMiddle>
            <ItemMiddle>TESTE</ItemMiddle>
          </ContentMiddle>
        </Content>
        <Content>
          <TituloItem style={{ marginBottom: '18px' }}>Testes</TituloItem>
          <Item>TESTE</Item>
          <Item>TESTE</Item>
          <Item>TESTE</Item>
        </Content>
      </WrapContent>
      <Copy>2020 &copy; Todos os direitos reservados para Legal.UP</Copy>
    </Container>
  );
};

export default Footer;
