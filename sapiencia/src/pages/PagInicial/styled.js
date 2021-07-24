import styled from 'styled-components';

export const Main = styled.div`
  /* min-height: 100vh; */
`

export const Image = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 10rem;
    object-fit: cover;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;


