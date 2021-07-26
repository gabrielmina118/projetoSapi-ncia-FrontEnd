import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination } from 'swiper/core';
import './swiper.css';
import {
  Heading,
  GlobalContainer,
  Container2
} from './styled2';
import barkus from '../../assets/barkus.png';
import fagulha from '../../assets/fagulha.png';
import fretadao from '../../assets/fretadao.png';
import linkedin from '../../assets/linkedin.png';
import quero_bolsa from '../../assets/quero_bolsa.png';
import vivare from '../../assets/vivare.png';

const InfoSection3 = () => {
  SwiperCore.use([Pagination]);
  
  return (
    <GlobalContainer>
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
            <img src={barkus} alt="barkus" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={fagulha} alt="fagulha" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={fretadao} alt="fretadao" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={linkedin} alt="linkedin" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={quero_bolsa} alt="quero_bolsa" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={vivare} alt="vivare" />
          </SwiperSlide>
        </Swiper>
      </Container2>
    </GlobalContainer>
  );
};

export default InfoSection3;
