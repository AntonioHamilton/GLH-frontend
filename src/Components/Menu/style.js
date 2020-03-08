import styled from 'styled-components';

export const HamburgerStyle = styled.div`
  display: none;
  position: absolute;
  top: 29px;
  left: 4px;
  @media (max-width: 1000px) {
    display: flex;
    z-index: 1000;
    top: 13px;
    left: 46px;
  }
`;

/*export const CloseButton = styled.a`
  display: none;
  @media (max-width: 1000px) {
    display: ${props => (props.active ? 'flex' : 'none')};
    position: fixed;
    left: 42px;
    top: 0px;
  }
`;*/

export const Container = styled.div`
  z-index: 3;
  position: sticky;
  background: #ffffff;
  height: 75px;
  justify-content: space-between;
  display: flex;
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
  }
`;

export const DivText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 150px;
  @media (max-width: 1000px) {
    height: 100vh;
    display: ${props => (props.active ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: ${props => (props.active ? 0 : '-500px')};
  }
`;

export const Text = styled.a`
  text-decoration: none;
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
  height: 50px;
  margin-top: 15px;
  margin-left: 150px;
  @media (max-width: 1000px) {
    margin: 0;
  }
  @media (max-width: 350px) {
    position: relative;
    left: 17px;
  }
`;
