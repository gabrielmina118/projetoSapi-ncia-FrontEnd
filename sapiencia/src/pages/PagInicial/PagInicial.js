import React from 'react';
import Footer from '../../components/Footer/Footer';
import {
  homeObjFive,
  homeObjFour,
  homeObjOne,
  homeObjThree,
  homeObjTwo
} from '../../components/InfoSection/Data';
import InfoSection from '../../components/InfoSection/InfoSection';
import { ImageContainer, H1, TextContainer, P, Div, Container } from './styled';
import { useState } from 'react';
import SideBar from '../../components/Header/SideBar/SideBar';
import Header from '../../components/Header/Header';
import InfoSection2 from '../../components/InfoSection/InfoSection2';
import InfoSection3 from '../../components/InfoSection/InfoSection3';

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
      <Container>
        <Div>
          <h3>
            INSCRIÇÕES ABERTAS • CURSO DE FORMAÇÃO PROFISSIONAL • 100% GRATUITO
            E ONLINE
          </h3>
          <p>
            Inscreva-se! Para saber mais informações acesse:
            instagram.com/projeto.sapiencia
          </p>
        </Div>
      </Container>

      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection2 />
      <InfoSection {...homeObjFour} />
      <InfoSection3/>
      <InfoSection {...homeObjFive} />
      <Footer />
    </div>
  );
};

export default PagInicial;
