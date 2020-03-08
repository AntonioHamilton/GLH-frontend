import styled from 'styled-components';

export const Container = styled.div`
  color: white;
`;
export const Author = styled.p`
  color: white;
  font-weight: bolder;
`;
export const Ultimo = styled.div``;
export const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20%);
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  justify-content: center;
`;
export const Card = styled.div`
  width: 100%;
  height: 300px;
  background: url('https://images.squarespace-cdn.com/content/v1/558811b8e4b0d4f1a8c30d8f/1474042820432-YZ34AG6Y8VBJ8CMAPMUS/ke17ZwdGBToddI8pDm48kOp6UnNdtOEDLQahntspjTAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcaYVBN2U2MY1U1JI3MUOv2Y81fkPaNBuc0oLBxaIsfUSvD0GYJMJh3lNpiXapxwTP/vlchamber_1353193205_39.jpe?format=1500w')
    no-repeat;
  border-radius: 10px;
  padding: 5px 10px;
  top: 0;
  position: relative;
  :hover {
    top: -4px;
    cursor: pointer;
  }
`;
export const Title = styled.h1``;
export const Description = styled.div`
  display: flex;
`;
export const Image = styled.img``;
export const Classificacao = styled.p``;
