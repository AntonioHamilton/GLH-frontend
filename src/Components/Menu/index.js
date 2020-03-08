import React from 'react';
import { Container, Text, DivText, Logo, Link } from './style';
import Judistart from '../../assets/home/menu/judistart.png';

const Menu = () => {
  return (
    <Container>
      <Link href="/">
        <Logo src={Judistart} />
      </Link>
      <DivText>
        <Text href="/">Home</Text>
        <Text href="/blog">Blog</Text>
        <Text href="/assinatura">Assine já</Text>
        <Text> Cadastre-se </Text>
        <Text href="/sistema"> Login </Text>
      </DivText>
    </Container>
  );
};

export default Menu;
