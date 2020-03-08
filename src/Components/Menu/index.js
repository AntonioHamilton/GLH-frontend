import React from 'react';
import { Container, Text, DivText, Logo, Link } from './style';

const Menu = () => {
  return (
    <Container>
      <Link href="/">
        <Logo
          src={
            'http://legalmarketing.co.il/wp-content/uploads/2017/05/logo-final.jpg'
          }
        />
      </Link>
      <DivText>
        <Text href="/">Home</Text>
        <Text href="/blog"> Blog </Text>
        <Text> Cadastre-se </Text>
        <Text> Login </Text>
      </DivText>
    </Container>
  );
};

export default Menu;
