import styled from 'styled-components';

export const Container = styled.div`
  background: #191970;
  padding: 20px 0px;
  color: white;
`;

export const Title = styled.h1``;

export const Description = styled.p`
  text-align: justify;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20%);
  justify-content: center;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(1, 100%);
  }
`;

export const Card = styled.div`
  justify-self: center;
  text-align: center;
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 300px;
  height: 380px;
  filter: grayscale(100%);
  transition: all 1s;
  cursor: pointer;
  :hover {
    filter: grayscale(0);
  }
`;

export const WrapCardContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapContent = styled.div`
  background: #fff;
  border-radius: 10px;
  position: relative;
  top: -60px;
  z-index: 1;
  width: 250px;
  color: #000;
`;

export const WrapInfo = styled.div`
  display: flex;
  margin: 0px 10vw 20px;
  flex-direction: column;
`;

export const TitleCard = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const DescriptionCard = styled.p`
  border-top: solid 1px #aaa;
  padding: 4px 0px;
`;
