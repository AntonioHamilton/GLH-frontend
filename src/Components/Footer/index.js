import React from 'react';
import Judistart from '../../Assets/home/menu/judistart.png';
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
            src={Judistart}
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
      <Copy>2020 &copy; Todos os direitos reservados para JUDISTART</Copy>
    </Container>
  );
};

export default Footer;
