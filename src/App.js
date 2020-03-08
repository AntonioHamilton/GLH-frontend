import React from 'react';

import Routes from './routes';
import Menu from './Components/Menu';
import Footer from './Components/Footer';

import { GlobalStyle } from './Styles/Global';

<<<<<<< HEAD
const App = () => (<>
  <Routes />
</>
)
=======
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
>>>>>>> 22388bc08fc1d77968b352abdaefb4df229b6ed6

export default App;
