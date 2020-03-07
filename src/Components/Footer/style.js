import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(to right, #ff1616, #004aad);
`;

export const WrapContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 25%);
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: self-end;
`;

export const Item = styled.li`
  color: white;
`;

export const TituloItem = styled.h1``;

export const ContentMiddle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;

export const Copy = styled.p`
  color: white;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const Image = styled.img`
  width: 100px;
`;

export const ItemMiddle = styled.li``;
