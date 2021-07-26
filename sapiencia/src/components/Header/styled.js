import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
  margin-top: -6rem;
  position: fixed;
  width: 100%;
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const Img = styled.img`
  height: 3.5rem;
  width: auto;
  position: absolute;
  left: 5rem;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    left: 1rem;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin-left: 3rem;
  &.active {
    font-weight: bolder;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2.2rem;
    cursor: pointer;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2.2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 845px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
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

  @media screen and (max-width: 1050px) {
    padding: 10px 10px;
    margin-right: 2rem;
  }
`;
