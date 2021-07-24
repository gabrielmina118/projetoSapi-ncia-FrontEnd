import styled from 'styled-components';
import Img2 from '../../assets/Img2.png';

export const ImageContainer = styled.div`
  background-image: url(${Img2});
  background-repeat: round;
  max-width: 100%;
  background-size: contain;
  height: 28rem;
  display: flex;
  align-items: flex-end;
  box-shadow: 0px -200px 57px -14px rgba(0, 0, 0, 0.61) inset;
  -webkit-box-shadow: 0px -200px 57px -14px rgba(0, 0, 0, 0.61) inset;
  -moz-box-shadow: 0px -200px 57px -14px rgba(0, 0, 0, 0.61) inset;

  @media screen and (max-width: 1050px) {
    height: 18.6rem;
    box-shadow: 0px -200px 51px 53px rgba(0, 0, 0, 0.61) inset;
    -webkit-box-shadow: 0px -200px 51px 53px rgba(0, 0, 0, 0.61) inset;
    -moz-box-shadow: 0px -200px 51px 53px rgba(0, 0, 0, 0.61) inset;
  }
`;

export const TextContainer = styled.div`
  padding: 2rem 5rem;
  @media screen and (max-width: 768px) {
    padding: 0.2rem 0.5rem;
  }
`;
export const H1 = styled.h1`
  color: white;
`;

export const P = styled.p`
  color: white;
  font-weight: lighter;
  margin-bottom: -1rem;
`;
