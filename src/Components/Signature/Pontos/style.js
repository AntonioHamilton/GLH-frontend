import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 0px 0px 30px 0px;
`;

export const WrapInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 24%);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 0px 3vw;
  justify-content: center;
  text-align: center;
`;

export const Servico = styled.p`
  text-align: justify;
`;

export const QtdPontos = styled.p`
  font-weight: bolder;
  font-size: 20px;
`;
