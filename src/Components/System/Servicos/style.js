import styled from 'styled-components';

export const Container = styled.div`
  background: #aaa;
  justify-content: center;
  height: 100vh;
  display: flex;
  align-items: center;
  @media (max-width: 1300px) {
    height: auto;
    padding: 30px 0px;
  }
`;

export const WrapContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 30vw);
  grid-column-gap: 20px;
  background: #aaa;
  justify-content: center;
  text-align: center;
  @media (max-width: 1300px) {
    grid-row-gap: 20px;
    grid-template-columns: repeat(1, 80vw);
  }
`;

export const WrapService = styled.div`
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2vw;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
`;

export const Icon = styled.img`
  width: 200px;
  height: 200px;
  cursor: pointer;
`;

export const Button = styled.a``;

export const WrapAgendar = styled.div`
  color: white;
  display: ${props => (props.active ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  z-index: 3;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
`;

export const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    @media (max-width: 1300px) {
      width: 80vw !important;
    }
  }
`;

export const Microservices = styled.datalist``;

export const Choices = styled.option``;

export const CloseButton = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 70px;
  top: 30px;
  @media (max-width: 1300px) {
    width: 20px;
    height: 20px;
    right: 20px;
  }
`;

export const WrapInput = styled.div`
  text-align: center;
  input {
    border-radius: 10px;
    margin: 20px 0px;
    padding: 10px;
    font-size: 20px;
    border: none;
  }
`;
