import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
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
  color: #000;
`;

export const TituloItem = styled.h1`
  color: #000;
  font-weight: bolder;
`;

export const ContentMiddle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;

export const Copy = styled.p`
  color: #000;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const Image = styled.img`
  width: 180px;
`;

export const ItemMiddle = styled.li`
  list-style-type: square;
  color: #000;
  left: 0;
  position: relative;
  transition: all 0.5s;
  :hover {
    left: 3px;
    cursor: pointer;
  }
`;
