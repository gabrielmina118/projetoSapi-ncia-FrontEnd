import React from 'react';
import Footer from '../../components/Footer/Footer';
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo
} from '../../components/InfoSection/Data';
import InfoSection from '../../components/InfoSection/InfoSection';
import { ImageContainer, H1, TextContainer, P } from './styled';
import { useState } from 'react';
import SideBar from '../../components/Header/SideBar/SideBar';
import Header from '../../components/Header/Header';

const PagInicial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <ImageContainer>
        <TextContainer>
          <P>SAPIÊNCIA</P>
          <H1>EMPODERANDO TALENTOS DA PERIFERIA POR MEIO DA EDUCAÇÃO</H1>
        </TextContainer>
      </ImageContainer>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </div>
  );
};

export default PagInicial;
