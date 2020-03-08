import styled from 'styled-components';

export const Container = styled.div`
  background: #B22222;
  padding: 50px 0px;
  color: white;
`;
export const TitleContainer = styled.h1``;
export const Card = styled.div`
  background: white;
  border-radius: 10px;
  width: 16vw;
  padding: 10px;
  box-shadow: none;
  transition: all 0.7s;
  color: black;
  :hover {
    color: white;
    background: #aaa;
    box-shadow: 10px 10px 1px #000;
  }
`;
export const Title = styled.h1`
  text-align: center;
`;
export const Description = styled.p`
  text-align: justify;
  padding: 2px;
`;
export const DescriptionContainer = styled.p`
  text-align: justify;
  margin-bottom: 20px;
`;
export const WrapCards = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 20%);
`;
export const WrapContent = styled.div`
  margin: 0vw 10vw;
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
`;
