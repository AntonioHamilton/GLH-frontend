import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import React from 'react';
import { Container, Image } from './style';
import withAutoplay from 'react-awesome-slider/dist/autoplay';//passar o slide sozinho
const AutoplaySlider = withAutoplay(AwesomeSlider);
import { Slide } from 'react-slideshow-image';
import image1 from '../../../assets/home/slider/image1.png'

const Slider = () => {
  return (
    <Container className="Container-slider">
        <AutoplaySlider
            play={false}
            cancelOnInteraction={false}
            interval={5000}
            style={{height: '60vh'}}
        >
            <Image data-src="https://blog.gotogether.com.br/wp-content/uploads/2019/02/265372-conheca-estrategias-para-fortalecer-o-relacionamento-com-colaboradores.jpg" />
            <Image data-src="https://www.unifor.br/documents/392166/0/Como+construir+startup+Banner-Site-Horizontal.png/39189c36-a829-a676-ea56-d71508ac31f1?t=1553258942364" />
            <Image data-src={image1} />
        </AutoplaySlider>
    </Container>
  );
};

export default Slider;

//https://blog.gotogether.com.br/wp-content/uploads/2019/02/265372-conheca-estrategias-para-fortalecer-o-relacionamento-com-colaboradores.jpg

//https://escolasdisruptivas.com.br/wp-content/uploads/2018/09/240823-primeiro-conteudo-avancado-lean-startup-entenda-o-que-e-e-quais-sao-os-principais-basicos-800x534.jpg

//https://cdn.startupi.com.br/wp-content/uploads/2019/04/startup-como-funciona.jpg