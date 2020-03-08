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
    nome: 'Plano para Startups na fase de Ideação',
    descricao: [
      'Conteúdos sobre orientação jurídica',
      'Tutorial sobre como abrir uma empresa',
      'Tutorial sobre como registrar marca',
      'Modelos de Contratos',
    ],
    qtd_pontos: 'Sem pontos',
    valor_mensal: 'Gratuito',
    valor_ponto: 'Gratuito',
  },
  {
    nome: 'Plano para Startups na fase de Operação',
    descricao: [
      'Já conseguiu lançar seu MVP? Mas quer continuar crescendo de forma segura? Assina nosso plano para obter consultoria recorrente, além disso você terá alguns pontos para comprar nossos serviços!',
    ],
    qtd_pontos: '4 pontos por mês',
    valor_mensal: 'R$ 1200,00',
    valor_ponto: 'R$ 300,00',
  },
  {
    nome: 'Pacote Planos para Startups na fase de Tração',
    descricao: [
      'É o faz-tudo, recebe uma quantidade gratificantemente boa de pontos de habilidade que podem ser gastos principalmente, aprendendo sobre empreendedorismo e criando contratos',
    ],
    qtd_pontos: '10 pontos por mês',
    valor_mensal: 'R$ 3000,00',
    valor_ponto: 'R$ 300,00',
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
          let money_type, integer, integer_price, cents, full_price, year;
          if (item.valor_mensal !== 'Gratuito') {
            money_type = item.valor_mensal.split(' ')[0];
            integer = item.valor_mensal.split(',').join(' ');
            integer_price = integer.split(' ')[1];
            cents = item.valor_mensal.split(',')[1];
            full_price = String(integer_price) + '.' + String(cents);
            year = String(parseFloat(full_price) * 12);
            if (year.indexOf('.') !== -1) {
              year[year.indexOf('.')] = ',';
            } else {
              year = year + ',00';
            }
          } else {
            money_type = '';
            integer = '';
            integer_price = 'Gratuito';
            cents = '';
            full_price = 'Gratuito';
            year = 'Gratuito';
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
              <Description>
                {item.descricao.map((item, index) => (
                  <li style={{ margin: '10px 0px' }}>{item}</li>
                ))}
              </Description>
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
