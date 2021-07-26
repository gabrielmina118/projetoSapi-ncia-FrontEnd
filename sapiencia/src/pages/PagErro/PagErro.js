import React from 'react';
import { Container, Img } from './styled';
import Logo2 from '../../assets/Logo2.png';
import { useHistory } from 'react-router';
import { goToHome } from '../../routes/coordinator';

const PagErro = () => {
  const history= useHistory()
  return (
    <Container>
      <Img src={Logo2} onClick={() => goToHome(history)} alt="Logo2" />
      <h1>Página não encontrada</h1>
      <p>Clique na imagem para retornar a página inicial.</p>
    </Container>
  );
};

export default PagErro;
