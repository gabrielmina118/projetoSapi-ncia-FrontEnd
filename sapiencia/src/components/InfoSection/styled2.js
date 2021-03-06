import styled from 'styled-components';

export const GlobalContainer = styled.div`
  text-align: center;
  margin-top: 15rem;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 868px) {
    flex-direction: column;
  }
`;

export const Container2 = styled.div`
  height: 350px;
  margin-bottom: 15rem;
`;

export const Container3 = styled.div`
  height: 350px;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 20rem;
`;

export const InfoContainer = styled.div`
  margin: 5rem auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 15rem;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 15rem;
  height: 15rem;
  margin: 0 0 2rem 0;
  padding-right: 0;
  box-shadow: 8px 9px 23px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 9px 23px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 9px 23px 0px rgba(0, 0, 0, 0.75);
`;

export const Heading = styled.h1`
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  max-width: 555px;
  height: 100%;
`;

export const CardTittle = styled.div`
  margin-bottom: -2rem;
  margin-left: 0.5rem;
`;

export const CardBody = styled.div`
  margin-bottom: -1rem;
  margin-left: 0.5rem;
`;
export const CardContent = styled.div`
  margin-left: 0.5rem;
  font-size: 0.8rem;
`;
export const P = styled.p`
  font-weight: 500;
`;
export const SubTitle = styled.p`
  font-weight: 300;
`;

export const QRCode = styled.img`
  width: auto;
  height: 15rem;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: black;
  padding: 10px 22px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  @media screen and (max-width: 1050px) {
    padding: 10px 10px;
  }
`;

export const P2 = styled.p`
  font-weight: 600;
  margin: 2rem;
  max-width: 200px;
`;
