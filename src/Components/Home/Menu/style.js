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
`;

export const Text = styled.h2`
  color: #000;
  background-color: #fff;
  margin: 20px;
  text-align: center;
  border-radius:2px;
  :hover {
    background: #000;
		color: #fff;
		cursor: pointer;
	}
`;
export const Divisor = styled.h2`
  margin: 20px;
  text-align: center;
`;
export const Logo = styled.img`
  widht: 100px;
  height: 75px;
`;