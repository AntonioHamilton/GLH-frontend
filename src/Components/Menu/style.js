import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  height: 75px;
  justify-content: space-between;
  display: flex;
  margin-right: 100px;
  margin-left: 100px;
`;

export const DivText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Text = styled.a`
  font-weight: bold;
  color: #000;
  background-color: #fff;
  height: 100%;
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 2px;
  transition: 0.2s all;
  :hover {
    background: #000;
    color: #fff;
    cursor: pointer;
  }
`;
export const Link = styled.a``;

export const Divisor = styled.h2`
  margin: 20px;
  text-align: center;
`;
export const Logo = styled.img`
  widht: 100px;
  height: 75px;
`;