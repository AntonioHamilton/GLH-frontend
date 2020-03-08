import styled from 'styled-components';

export const Container = styled.div`
  background: #b22222;
  padding: 50px 0px;
  color: #000;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
`;

export const Colaboradores = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 21%);
  justify-content: center;
  margin-left: 20px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(1, 90%);
    justify-items: center;
    grid-row-gap: 10px;
    margin-left: 0;
  }
`;

export const Colaborador = styled.img`
  justify-content: center;
  border-radius: 6px;
`;
