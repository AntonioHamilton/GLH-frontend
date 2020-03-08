import React from 'react';

import NossoTime from '../../Components/Home/NossoTime';
import Descricao from '../../Components/Home/Descricao';
import Parceiros from '../../Components/Home/Parceiros/index';
const Home = () => {
  return (
    <>
      <Descricao />
      <NossoTime />
      <Parceiros/>
    </>
  );
};

export default Home;
