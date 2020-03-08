import React, { useState } from 'react';
import {
  Container,
  Text,
  DivText,
  Logo,
  Link,
  HamburgerStyle,
  CloseButton,
} from './style';
import Judistart from '../../assets/home/menu/judistart.png';
import { HamburgerButton } from 'react-hamburger-button';

const Menu = () => {
  let [active, setActive] = useState(false);

  return (
    <Container>
      <HamburgerStyle>
        <HamburgerButton
          open={active}
          onClick={() => setActive(!active)}
          width={20}
          height={20}
          strokeWidth={3}
          color="#000"
          animationDuration={0.5}
        />
      </HamburgerStyle>
      <Link href="/">
        <Logo src={Judistart} />
      </Link>
      <DivText active={active}>
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

/*<CloseButton active={active} onClick={() => setActive(!active)}>
<img
  style={{ width: '20px', height: '20px' }}
  src="https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_close-512.png"
/>
</CloseButton>*/
