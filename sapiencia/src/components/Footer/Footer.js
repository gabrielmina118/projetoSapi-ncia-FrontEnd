import React from 'react';
import { Container, Img } from './styled';
import Logo from '../../assets/Logo.png';

const Footer = () => {
  return (
    <Container>
      <Img src={Logo} />
    </Container>
  );
};

export default Footer;
