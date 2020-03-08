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
} from './style';

const dadosPlano = [
  {
    nome: 'Pacote Bardo',
    descricao: 'Um pacote tão fraco quanto um bardo lutando contra um dragão',
    qtd_pontos: '5 pontos por mês',
    valor_mensal: 'R$ 1950,00',
    valor_ponto: 'R$ 390,00',
  },
];
const Planos = () => {
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
              <Item>{item.qtd_pontos}</Item>
              <Item>{item.valor_ponto}</Item>
            </Card>
          );
        })}
      </WrapCard>
    </Container>
  );
};

export default Planos;
