import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
`;

export const Text = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

export const Card = styled.div`
  color: white;
  background: #1e1e1e;
  border-radius: 20px;
  padding: 0px 0px;
`;
export const Name = styled.h2`
  padding: 20px 0px;
`;
export const Description = styled.h3`
  text-align: justify;
  background: #988d8d;
  padding: 30px;
`;

export const Item = styled.p``;
export const WrapCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 20%);
  justify-content: center;
  text-align: center;
`;

export const Price = styled.h2`
  padding: 30px;
  color: #000;
  background: #fff;
`;

export const Integer = styled.p`
  font-size: 50px;
  position: relative;
  bottom: -12px;
`;

export const MoneyType = styled.p`
  font-weight: 100;
`;

export const Cents = styled.p`
  position: relative;
  bottom: 2px;
`;

export const Year = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const WrapPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #e84b37;
`;

export const Button = styled.a`
  padding: 5px;
  font-size: 20px;
  cursor: pointer;
  background: #e84b37;
  border-radius: 5px;
`;
