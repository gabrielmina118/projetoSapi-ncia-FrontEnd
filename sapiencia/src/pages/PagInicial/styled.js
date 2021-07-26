import styled from 'styled-components';
import Img2 from '../../assets/Img2.png';

export const ImageContainer = styled.div`
  background-image: url(${Img2});
  background-repeat: round;
  max-width: 100%;
  background-size: contain;
  margin-top: 6rem;
  height: 30rem;
  display: flex;
  align-items: flex-end;
  box-shadow: 0px -200px 57px -14px rgba(0, 0, 0, 0.61) inset;
  -webkit-box-shadow: 0px -200px 57px -14px rgba(0, 0, 0, 0.61) inset;
  -moz-box-shadow: 0px -200px 57px -14px rgba(0, 0, 0, 0.61) inset;

  @media screen and (max-width: 1050px) {
    box-shadow: -5px -151px 55px -35px rgba(0, 0, 0, 0.75) inset;
    -webkit-box-shadow: -5px -151px 55px -35px rgba(0, 0, 0, 0.75) inset;
    -moz-box-shadow: -5px -151px 55px -35px rgba(0, 0, 0, 0.75) inset;
    height: 25rem;
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
  @media screen and (max-width: 1050px) {
    font-size: 18px;
  }
`;

export const P = styled.p`
  color: white;
  font-weight: lighter;
  margin-bottom: -0.2rem;
`;

export const DivContainer = styled.div`
  width: 100%;
  height: 60rem;
`;

export const Div = styled.div`
  padding: 2rem;
  display: flex;
  margin: 0 auto;
  width: auto;
  height: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  text-align: center;

  @media screen and (max-width: 868px) {
    height: 10rem;
  }
`;

export const SButton = styled.button`
  cursor: pointer;
  font-weight: bold;
  background: black;
  padding: 10px 22px;
  width: 100%;
  height: 15rem;
  color: white;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 1050px) {
    padding: 10px 10px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
