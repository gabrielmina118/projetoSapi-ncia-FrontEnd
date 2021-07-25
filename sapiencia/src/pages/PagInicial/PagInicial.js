import React from 'react';
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo
} from '../../components/InfoSection/Data';
import InfoSection from '../../components/InfoSection/InfoSection';
import { ImageContainer, H1, TextContainer, P } from './styled';

const PagInicial = () => {
  return (
    <div>
      <ImageContainer>
        <TextContainer>
          <P>SAPIÊNCIA</P>
          <H1>EMPODERANDO TALENTOS DA PERIFERIA POR MEIO DA EDUCAÇÃO</H1>
        </TextContainer>
      </ImageContainer>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </div>
  );
};

export default PagInicial;
