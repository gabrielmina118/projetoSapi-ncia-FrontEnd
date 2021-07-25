import React from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SidebarRoute
} from './styled';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="/" onClick={toggle}>
            Início
          </SideBarLink>
          <SideBarLink to="about" onClick={toggle}>
            Quem Somos
          </SideBarLink>
          <SideBarLink to="depoimentos" onClick={toggle}>
            Depoimentos
          </SideBarLink>
          <SideBarLink to="apoio" onClick={toggle}>
            Apoio
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/seja-sapiente">Inscreva-se</SidebarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
