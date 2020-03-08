import React from 'react';

import {
  Container,
  Lista,
  CardUltimo,
  TitleUltimo,
  DescriptionUltimo,
  ImageUltimo,
  ClassificacaoUltimo,
  AuthorUltimo,
  Card,
  Title,
  Description,
  Image,
  Classificacao,
  Author,
  Link,
} from './style';

const dadosblog = [
  {
    nome: 'Aprenda como criar a patente de sua Startup, de maneira gratuita',
    autor: 'Antonio',
    data: '29/03/2020',
    foco: 'Ideação',
    image: 'https://otaostartups.com/wp-content/uploads/2019/10/startup.png',
  },
  {
    nome: 'Dicas sobre propriedade intelectual para Startups',
    autor: 'Thalles',
    data: '29/03/2020',
    foco: 'Operação',
    image: 'https://image.flaticon.com/icons/png/512/1787/1787654.png',
  },
  {
    nome: 'Você tem uma ideia? Veja o que deve ser feito!',
    autor: 'Henrique',
    data: '29/03/2020',
    foco: 'Tração',
    image:
      'https://cdn.icon-icons.com/icons2/1532/PNG/512/3285300-launch-rocket-space-spacecraft-spaceship-starship-startup_106797.png',
  },
  {
    nome: 'Já tem um MVP? Esta postagem é para você!',
    autor: 'Laís',
    data: '29/03/2020',
    foco: 'Ideação',
    image:
      'https://i0.wp.com/www.azotech.com.br/wp-content/uploads/revslider/startup_home/startup-rocket.png?ssl=1',
  },
  {
    nome: 'Quais os caminhos para abrir uma Startup',
    autor: 'Jéssica',
    data: '29/03/2020',
    foco: 'Tração',
    image:
      'https://i.ya-webdesign.com/images/legal-clipart-weight-balance-1.png',
  },
  {
    nome: 'Quais os caminhos para abrir uma Startup',
    autor: 'Jéssica',
    data: '29/03/2020',
    foco: 'Tração',
    image: 'https://pngimage.net/wp-content/uploads/2018/06/law-png-4.png',
  },
  {
    nome: 'Quais os caminhos para abrir uma Startup',
    autor: 'Jéssica',
    data: '29/03/2020',
    foco: 'Tração',
    image:
      'https://1.bp.blogspot.com/-wkDQii8gXFI/V6sv0nfXEZI/AAAAAAAABvQ/85cwcQj5UrwPSuzKIoLW5Ghvv_LyzDQvwCLcB/s1600/startup.png',
  },
];

const Listagem = () => {
  return (
    <Container>
      <Link
        href="https://www.jota.info/tudo-sobre/marco-legal-de-startups-e-empreendedorismo-inovador"
        target="_blank"
      >
        <CardUltimo>
          <ImageUltimo src={dadosblog[0].image} />
          <TitleUltimo>{dadosblog[0].nome}</TitleUltimo>
          <DescriptionUltimo>
            por&nbsp;
            <AuthorUltimo>{dadosblog[0].autor}</AuthorUltimo>
            &nbsp;publicado em: {dadosblog[0].data}
          </DescriptionUltimo>
          <ClassificacaoUltimo>{dadosblog[0].foco}</ClassificacaoUltimo>
        </CardUltimo>
      </Link>
      <Lista>
        {dadosblog.map((item, index) => {
          return index === 0 ? (
            <></>
          ) : (
            <Link
              key={index}
              href="https://www.jota.info/paywall?redirect_to=//www.jota.info/coberturas-especiais/inova-e-acao/parcerias-entre-os-poderes-publicos-e-as-startups-perspectivas-e-desafios-para-2020-21012020"
              target="_blank"
            >
              <Card>
                <Image src={item.image} />
                <Title>{item.nome}</Title>
                <Description>
                  por&nbsp;
                  <Author>{item.autor}</Author>
                  &nbsp; publicado em: {item.data}
                </Description>
                <Classificacao>{item.foco}</Classificacao>
              </Card>
            </Link>
          );
        })}
      </Lista>
    </Container>
  );
};

export default Listagem;
