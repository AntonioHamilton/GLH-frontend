import React from 'react';

import NossoTime from '../../Components/Home/NossoTime';
import Descricao from '../../Components/Home/Descricao';
import Slider from '../../Components/Home/Slider/index';
import Parceiros from '../../Components/Home/Parceiros/index';
const Home = () => {
  return (
    <>
      <Slider/>
      <Descricao />
      <NossoTime />
      <Parceiros/>
    </>
  );
};

export default Home;
