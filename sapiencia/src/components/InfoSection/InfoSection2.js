import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
  GlobalContainer,
  Container2,
  QRCode,
  Button,
  Container3
} from './styled2';
import Rafis from '../../assets/Rafis.png';
import Joao from '../../assets/Joao.png';
import Beatriz from '../../assets/Beatriz.png';
import barkus from '../../assets/barkus.png';
import fagulha from '../../assets/fagulha.png';
import fretadao from '../../assets/fretadao.png';
import linkedin from '../../assets/linkedin.png';
import quero_bolsa from '../../assets/quero_bolsa.png';
import vivare from '../../assets/vivare.png';
import QrCode from '../../assets/QrCode.png';

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
      <Heading>APOIADORES</Heading>
      <Container2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={barkus} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={fagulha} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={fretadao} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={linkedin} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={quero_bolsa} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={vivare} />
          </SwiperSlide>
        </Swiper>
      </Container2>
      <Heading>ENTRE EM CONTATO</Heading>
      <h3>
        Quer saber mais sobre os cursos, quer apoiar nosso projeto ou tem alguma
        dúvida? Entre em contato com a gente através do código QR abaixo.
      </h3>
      <Container3>
        <QRCode src={QrCode} />
        <Button>Inscreva-se</Button>
      </Container3>
    </GlobalContainer>
  );
};

export default InfoSection2;
