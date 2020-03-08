import React from 'react';
import { Container, Text, DivText, Logo, Divisor } from './style';

const Menu = () => {
  return(
  <Container>
    <Logo src={"http://legalmarketing.co.il/wp-content/uploads/2017/05/logo-final.jpg"}/>
    <DivText>
      <Text>  Cadastre-se  </Text>
      <Divisor>|</Divisor>
      <Text>  Blog  </Text>
      <Text>  Login  </Text>
    </DivText>
  </Container>
  )
};

export default Menu;
