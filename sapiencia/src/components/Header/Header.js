import React from 'react';
import {
  Nav,
  Img,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  MobileIcon
} from './styled';
import Logo from '../../assets/Logo.png';

const Header = ({ toggle }) => {
  return (
    <Nav>
      <NavLink to="/">
        <Img src={Logo} />
      </NavLink>
      <MobileIcon onClick={toggle}>
        <Bars />
      </MobileIcon>
      <NavMenu>
        <NavLink to="/quem-somos">Quem Somos</NavLink>
        <NavLink to="/depoimentos">Depoimentos</NavLink>
        <NavLink to="/voluntarios">voluntários</NavLink>
        <NavBtnLink to="/sejaSapiente">Seja Sapiente</NavBtnLink>
      </NavMenu>
      <NavBtn></NavBtn>
    </Nav>
  );
};

export default Header;
