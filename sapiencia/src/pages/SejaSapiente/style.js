import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Main = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: auto;
  max-width: 30rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  circle{
      color: black;
  }
`;

export const Fisinh = styled.div`
  display: flex;
  font-size: 25px;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const Titulo = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  font-weight: bold;
  background: #ffff;
  padding: 10px 22px;
  color: black;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 2rem;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #44039e;
    color: #fff;
  }

  @media screen and (max-width: 1050px) {
    padding: 10px 10px;
    margin-right: 2rem;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  width: 7rem;
  background: black;
  padding: 10px 22px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;