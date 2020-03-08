import React from 'react';
import {
  Container,
  WrapSlide,
  Image,
  SlideText,
  SlideDescription,
  WrapContent,
} from './style';
import { Slide } from 'react-slideshow-image';

const images = [
  {
    image:
      'https://img3.goodfon.com/original/1920x1080/1/ea/biznes-rukopozhatie-sdelka.jpg',
    title: 'Tenha segurança para crescer!',
    description:
      'Nós oferecemos os melhores profissionais para te assessorar durante toda a sua caminhada, desde a fase de ideização, até a sua empresa decolar',
  },
  {
    image:
      'https://cdn.lynda.com/course/765313/765313-637089310605640188-16x9.jpg',
    title: 'Invista em seu futuro!',
    description:
      'Nós oferecemos planos educativos para que você não tenha mais dúvidas jurídicas',
  },
  {
    image:
      'https://www.ebradi.com.br/wp-content/uploads/2019/07/original-09260b77164452cf23e5c5f15cea6627-1080x675.jpg',
    title: 'Tenha a melhor assessoria a sua disposição!',
    description:
      'Nossos advogados são especializados na área e irão te acompanhar em todo o seu crescimento.',
  },
];

const properties = {
  duration: 250000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slideshow = () => {
  return (
    <Container className="slide-container">
      <Slide {...properties}>
        {images.map((item, index) => (
          <WrapSlide key={index} className="each-slide">
            <Image>
              <img
                style={{
                  zIndex: -1,
                  opacity: 0.8,
                  position: 'absolute',
                  width: '100vw',
                }}
                alt={`that's ${item.index}`}
                src={item.image}
              />
              <WrapContent>
                <SlideText>{item.title}</SlideText>
                <SlideDescription>{item.description}</SlideDescription>
              </WrapContent>
            </Image>
          </WrapSlide>
        ))}
      </Slide>
    </Container>
  );
};

export default Slideshow;

//https://blog.gotogether.com.br/wp-content/uploads/2019/02/265372-conheca-estrategias-para-fortalecer-o-relacionamento-com-colaboradores.jpg

//https://escolasdisruptivas.com.br/wp-content/uploads/2018/09/240823-primeiro-conteudo-avancado-lean-startup-entenda-o-que-e-e-quais-sao-os-principais-basicos-800x534.jpg

//https://cdn.startupi.com.br/wp-content/uploads/2019/04/startup-como-funciona.jpg
