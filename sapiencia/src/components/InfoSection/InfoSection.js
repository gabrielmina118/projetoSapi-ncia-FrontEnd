import React from 'react';
import {
  ButtonC,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper
} from './styled';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  lightText,
  headline,
  darkText,
  description,
  description2,
  description3,
  img,
  button
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <Subtitle darkText={darkText}>{description3}</Subtitle>
                <ButtonC button={+button} to="/voluntario">
                  Seja Voluntário
                </ButtonC>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={'Template1'} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
