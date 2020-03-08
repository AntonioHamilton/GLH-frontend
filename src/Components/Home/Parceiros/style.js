import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 50px 0px;
  color: #000;
  justify-content: flex;
`;

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;

export const Colaboradores = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 30%);
    justify-content: center;
    margin-left: 130px;
`;

export const Colaborador = styled.img`
    justify-content: center;
`;
