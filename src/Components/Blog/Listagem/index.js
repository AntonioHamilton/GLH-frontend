import React from 'react';

import {
  Container,
  Ultimo,
  Lista,
  Card,
  Title,
  Description,
  Image,
  Classificacao,
  Author,
} from './style';

const dadosblog = [
  {
    nome: 'Como criar a patente de sua Startup',
    autor: 'Antonio',
    data: '29/03/2020',
    foco: 'Ideização',
    image: '',
  },
  {
    nome: 'Dicas sobre propriedade intelectual para Startups',
    autor: 'Thalles',
    data: '29/03/2020',
    foco: 'Operação',
    image: '',
  },
  {
    nome: 'Você tem uma ideia? Veja o que deve ser feito!',
    autor: 'Henrique',
    data: '29/03/2020',
    foco: 'Tração',
    image: '',
  },
  {
    nome: 'Já tem um MVP? Esta postagem é para você',
    autor: 'Laís',
    data: '29/03/2020',
    foco: 'Ideização',
    image: '',
  },
  {
    nome: 'Quais os caminhos para abrir uma Startup',
    autor: 'Jéssica',
    data: '29/03/2020',
    foco: 'Tração',
    image: '',
  },
  {
    nome: 'Quais os caminhos para abrir uma Startup',
    autor: 'Jéssica',
    data: '29/03/2020',
    foco: 'Tração',
    image: '',
  },
  {
    nome: 'Quais os caminhos para abrir uma Startup',
    autor: 'Jéssica',
    data: '29/03/2020',
    foco: 'Tração',
    image: '',
  },
];

const Listagem = () => {
  return (
    <Container>
      <Ultimo>AAAAA</Ultimo>
      <Lista>
        {dadosblog.map((item, index) => {
          return index === 0 ? (
            <></>
          ) : (
            <Card key={index}>
              <Image src="" />
              <Title>{item.nome}</Title>
              <Description>
                por&nbsp;
                <Author>{item.autor}</Author>
                &nbsp; publicado em: {item.data}
              </Description>
              <Classificacao>{item.foco}</Classificacao>
            </Card>
          );
        })}
      </Lista>
    </Container>
  );
};

export default Listagem;
