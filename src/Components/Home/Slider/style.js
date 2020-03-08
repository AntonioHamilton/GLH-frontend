import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  color: #000;
  .nav {
    z-index: 1;
  }
`;

export const Image = styled.div`
  width: 100vw;
  height: 90vh;
  background-image: no-repeat center center fixed cover;
  @media (max-width: 1000px) {
    height: 30vh;
  }
`;

export const WrapContent = styled.div`
  align-items: flex-start;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0px 70px;
  position: relative;
  left: -10px;
  background: rgba(0, 0, 0, 0.5);
  @media (max-width: 1000px) {
    padding: 0px 40px;
  }
`;

export const SlideText = styled.span`
  font-size: 30px;
  color: white;
  font-weight: bold;
`;

export const SlideDescription = styled.span`
  color: white;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const WrapSlide = styled.div``;
