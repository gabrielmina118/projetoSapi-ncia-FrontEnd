import React from 'react';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  Img,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights
} from './styled';
import Logo from '../../assets/Logo.png';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <Img src={Logo} onClick={toggleHome}></Img>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Links</FooterLinkTitle>
              <FooterLink to="/" onClick={toggleHome}>
                Início
              </FooterLink>
              <FooterLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Quem Somos
              </FooterLink>
              <FooterLink
                to="depoimentos"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Depoimentos
              </FooterLink>
              <FooterLink
                to="apoio"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Apoio
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Seja Sapiente</FooterLinkTitle>
              <FooterLink to="/seja-sapiente">Inscrição</FooterLink>
              <FooterLink to="/seja-sapiente">Acesso</FooterLink>
              <FooterLink to="/seja-sapiente">Dúvidas</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              Sapiência® {new Date().getFullYear()}
              Todos os direitos reservados.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" arial_label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial_label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial_label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
