import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Img = styled.img`
  height: 10%;
  width: auto;
  position: absolute;
  margin: 0 auto;
  left: 5rem;
  cursor: pointer;
  @media screen and (max-width: 820px) {
    height: 15%;
  }
`;

export const FooterContainer = styled.footer`
  background-color: black;
  align-items: center;
`;

export const FooterWrap = styled.div`
  padding: 2rem 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    font-weight: bolder;
    transition: 0.2s ease-out;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto 0 auto;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 1rem; ;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 6rem;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
