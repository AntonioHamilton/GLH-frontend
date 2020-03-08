import React from 'react';

import {
  Container,
  Text,
  Card,
  Name,
  Description,
  Item,
  WrapCard,
  Price,
  MoneyType,
  Integer,
  Cents,
  Year,
  WrapPrice,
  Button,
} from './style';

const dadosPlano = [
  {
    nome: 'Pacote Bardo',
    descricao: 'Um pacote tão fraco quanto um bardo lutando contra um dragão',
    qtd_pontos: '5 pontos por mês',
    valor_mensal: 'R$ 1950,00',
    valor_ponto: 'R$ 390,00',
  },
  {
    nome: 'Pacote Camponês',
    descricao:
      'Pode até parecer um pacote fraco, mas acredite, ele está acima do bardo. Suas principais habilidades são: se esconder de goblins e aprender bastante sobre startups',
    qtd_pontos: '7 pontos por mês',
    valor_mensal: 'R$ 2695,00',
    valor_ponto: 'R$ 385,00',
  },
  {
    nome: 'Pacote Mago',
    descricao:
      'É o faz-tudo, recebe uma quantidade gratificantemente boa de pontos de habilidade que podem ser gastos principalmente, aprendendo sobre empreendedorismo e criando contratos',
    qtd_pontos: '10 pontos por mês',
    valor_mensal: 'R$ 3800,00',
    valor_ponto: 'R$ 380,00',
  },
  {
    nome: 'Pacote Ladino',
    descricao:
      'É furtivo, mas está sempre ali para ser útil, ninguém vê o seu impacto, mas é de extrema importâcia para o grupo',
    qtd_pontos: '12 pontos por mês',
    valor_mensal: 'R$ 4500,00',
    valor_ponto: 'R$ 3375,00',
  },
  {
    nome: 'Pacote Clérigo',
    descricao: 'Um pacote tão fraco quanto um bardo lutando contra um dragão',
    qtd_pontos: '15 pontos por mês',
    valor_mensal: 'R$ 5550,00',
    valor_ponto: 'R$ 370,00',
  },
  {
    nome: 'Pacote Bárbaro',
    descricao:
      'Esse é o pacote especial, ele chega chutando portas, arrebentando correntes e sem pensar nas consequências. Apenas é contratado sob demanda e acima de 15 pontos',
    qtd_pontos: 'Mais de 15 pontos por mês',
    valor_mensal: 'R$ 5550,00',
    valor_ponto: 'R$ 370,00',
  },
];
const Planos = () => {
  const DefinirPacote = nomePacote => {
    alert(`você acabou de assinar o ${nomePacote}`);
    window.location = '/blog';
  };

  return (
    <Container>
      <Text>
        Assine o nosso pacote e tenha a melhor educação jurídica para você
      </Text>
      <WrapCard>
        {dadosPlano.map((item, index) => {
          let money_type = item.valor_mensal.split(' ')[0];
          let integer = item.valor_mensal.split(',').join(' ');
          let integer_price = integer.split(' ')[1];
          let cents = item.valor_mensal.split(',')[1];
          let full_price = String(integer_price) + '.' + String(cents);
          let year = String(parseFloat(full_price) * 12);
          if (year.indexOf('.') !== -1) {
            console.log(year);
            year[year.indexOf('.')] = ',';
          } else {
            year = year + ',00';
          }
          return (
            <Card key={index}>
              <Name>{item.nome}</Name>
              <Price>
                <WrapPrice>
                  <MoneyType>{money_type} &nbsp;</MoneyType>
                  <Integer>{integer_price}</Integer>
                  <Cents>,{cents} / mês</Cents>
                </WrapPrice>
                <Year>
                  ou {money_type} {year} / ano
                </Year>
              </Price>
              <Description>{item.descricao}</Description>
              <Item>
                <p style={{ color: '#aaa', padding: '5px 0px 0px 0px' }}>
                  Quantidade de pontos
                </p>{' '}
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  {item.qtd_pontos}
                </p>
              </Item>
              <Item>
                <p style={{ color: '#aaa', padding: '5px 0px 0px 0px' }}>
                  Valor Unitário dos pontos
                </p>{' '}
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  {item.valor_ponto}
                </p>
              </Item>
              <Button onClick={() => DefinirPacote(item.nome)}>
                Assine já!
              </Button>
            </Card>
          );
        })}
      </WrapCard>
    </Container>
  );
};

export default Planos;
