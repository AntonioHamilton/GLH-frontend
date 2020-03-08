import styled from 'styled-components';

export const Container = styled.div`
  color: white;
`;
export const Author = styled.p`
  color: white;
  font-weight: bolder;
`;
export const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20%);
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  justify-content: center;
  padding: 40px 0px;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 30%);
  }
  @media (max-width: 900px) {
    justify-items: center;
    grid-template-columns: repeat(1, 90%);
  }
`;
export const Card = styled.div`
  width: 100%;
  height: 50vh;
  background: url('https://images.squarespace-cdn.com/content/v1/558811b8e4b0d4f1a8c30d8f/1474042820432-YZ34AG6Y8VBJ8CMAPMUS/ke17ZwdGBToddI8pDm48kOp6UnNdtOEDLQahntspjTAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcaYVBN2U2MY1U1JI3MUOv2Y81fkPaNBuc0oLBxaIsfUSvD0GYJMJh3lNpiXapxwTP/vlchamber_1353193205_39.jpe?format=1500w')
    no-repeat;
  border-radius: 10px;
  padding: 5px 10px;
  top: 0;
  position: relative;
  transition: 0.3s all;
  :hover {
    top: -4px;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    width: 80vw;
    height: auto;
    display: flex;
    justify-self: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const Title = styled.h1`
  position: relative;
  z-index: 1;
  @media (max-width: 1300px) {
    margin-top: 10px;
  }
`;
export const Description = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  @media (max-width: 1300px) {
    margin-top: 10px;
  }
`;
export const Image = styled.img`
  width: inherit;
  position: absolute;
  opacity: 0.5;
  z-index: 0;
  top: 40px;
  left: -3px;
  @media (max-width: 1300px) {
    width: 150px;
    height: 150px;
    /* position: relative; */
    right: 40px;
    top: auto;
    left: auto;
  }
`;
export const Classificacao = styled.p`
  position: absolute;
  bottom: 30px;
  z-index: 1;
  @media (max-width: 1300px) {
    position: unset;
    margin-top: 10px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
`;

export const CardUltimo = styled.div`
  margin: 30px 7.5vw 0px;
  text-align: center;
  background: url('https://www.materiaisparaconstrucaosp.com.br/imagens/piso-laminado-de-madeira-valor.jpg');
  border-radius: 5em;
  padding: 20px;
  color: black;
  @media (max-width: 1300px) {
    border-radius: 10px;
  }
`;
export const TitleUltimo = styled.h1`
  @media (max-width: 1300px) {
    font-size: 15px;
    margin-top: 15px;
    text-align: justify;
  }
`;
export const DescriptionUltimo = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 1300px) {
    font-size: 15px;
    margin-top: 15px;
    text-align: justify;
  }
`;
export const ImageUltimo = styled.img`
  width: 30vw;
`;
export const ClassificacaoUltimo = styled.p`
  @media (max-width: 1300px) {
    font-size: 15px;
    margin-top: 15px;
    text-align: justify;
  }
`;
export const AuthorUltimo = styled.p`
  font-weight: bolder;
`;
