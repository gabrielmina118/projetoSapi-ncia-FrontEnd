import React from 'react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination } from 'swiper/core';
import './swiper.css';
import {
  InfoContainer,
  ImageContainer,
  CardBody,
  CardTittle,
  Img,
  CardContent,
  P,
  SubTitle,
  Container,
  Heading,
  GlobalContainer
} from './styled2';
import Rafis from '../../assets/Rafis.png';
import Joao from '../../assets/Joao.png';
import Beatriz from '../../assets/Beatriz.png';

const InfoSection2 = () => {
  SwiperCore.use([Pagination]);
  return (
    <GlobalContainer>
      <Heading>EQUIPE GESTORA</Heading>
      <Container>
        <InfoContainer>
          <ImageContainer>
            <Img src={Rafis} />
          </ImageContainer>
          <CardTittle>
            <h3>Rafis Martins</h3>
          </CardTittle>
          <CardBody>
            <SubTitle>Diretor Geral</SubTitle>
          </CardBody>
          <CardContent>
            <P>
              Diretor de Arte na OLIVER Latin America, formado em Publicidade e
              Propaganda na Anhembi Morumbi e a primeria geração da família a
              possuir um diploma universitário.
            </P>
          </CardContent>
        </InfoContainer>
        <InfoContainer>
          <ImageContainer>
            <Img src={Beatriz} />
          </ImageContainer>
          <CardTittle>
            <h3>Beatriz Varanelli</h3>
          </CardTittle>
          <CardBody>
            <SubTitle>Diretora de Marketing</SubTitle>
          </CardBody>
          <CardContent>
            <P>
              Analista de Marketing na Bimbo Brasil, formada em Marketing com
              honras na Anhembi Morumbi e a primeria geração da família a
              possuir um diploma universitário.
            </P>
          </CardContent>
        </InfoContainer>
        <InfoContainer>
          <ImageContainer>
            <Img src={Joao} />
          </ImageContainer>
          <CardTittle>
            <h3>João Pedro Melo</h3>
          </CardTittle>
          <CardBody>
            <SubTitle>Diretor Pedagógico</SubTitle>
          </CardBody>
          <CardContent>
            <P>
              Pós Graduado em Design Educacional, Pesquisador formado em Letras
              pela USP e quebrando as estatísticas da exclusão da pessoa trans
              no sistema de ensino.
            </P>
          </CardContent>
        </InfoContainer>
      </Container>
    </GlobalContainer>
  );
};

export default InfoSection2;
