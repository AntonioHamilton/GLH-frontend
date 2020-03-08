import React from 'react';

import Routes from './routes';
import Menu from './Components/Menu';
import Footer from './Components/Footer';

import { GlobalStyle } from './Styles/Global';

const App = () => {
  return (
    <>
      <Menu />
      <GlobalStyle />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
