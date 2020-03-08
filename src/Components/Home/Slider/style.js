import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  color: #000;
`;

export const Image = styled.div`
  width: 100vw;
  height: 90vh;
  background-image: no-repeat center center fixed cover;
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
`;

export const SlideText = styled.span`
  font-size: 30px;
  color: white;
  font-weight: bold;
`;

export const SlideDescription = styled.span`
  color: white;
`;

export const WrapSlide = styled.div``;
