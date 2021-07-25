import React, { useEffect, useState } from 'react';
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
import { animateScroll as scroll } from 'react-scroll';

const Header = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavLink to="/" onClick={toggleHome}>
        <Img src={Logo} />
      </NavLink>
      <MobileIcon onClick={toggle}>
        <Bars />
      </MobileIcon>
      <NavMenu>
        <NavLink
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Quem Somos
        </NavLink>
        <NavLink
          to="depoimentos"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Depoimentos
        </NavLink>
        <NavLink
          to="apoio"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Apoio
        </NavLink>
        <NavBtnLink to="/">Seja Sapiente</NavBtnLink>
      </NavMenu>
      <NavBtn></NavBtn>
    </Nav>
  );
};

export default Header;
