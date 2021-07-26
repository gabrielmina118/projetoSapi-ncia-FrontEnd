import Template1 from '../../assets/Template1.png';
import Template2 from '../../assets/Template2.png';
import Template3 from '../../assets/Template3.png';
import QrCode from '../../assets/QrCode.png'

export const homeObjOne = {
  id: 'about',
  lightBg: true,
  lightText: false,
  img: Template1,
  button: false,
  lightTextDesc: false,
  headline: 'QUEM SOMOS',
  description:
    'Fundado em 2020, o projeto Sapiência conta hoje com um time multifuncional de voluntários nas áreas de educacional, publicidade e marketing, TI e administrativo.',
  description2:
    'Nascemos do nosso amor pela educação, do nosso desejo de compartilhar informação e da nossa necessidade de fazer o mundo um pouco melhor. ',
  imgStart: false,
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjTwo = {
  lightBg: true,
  lightText: false,
  img: Template3,
  button: false,
  lightTextDesc: false,
  headline: 'O QUE FAZEMOS E PARA QUEM FAZEMOS',
  description:
    'Compartilhamos oportunidades, explicamos caminhos e ajudamos talentos periféricos a se desenvolverem por meio de cursos, oficinas e mentoria 100% gratuitos. ',
  description2:
    'Contemplamos pessoas de 16 a 24 anos, de regiões periféricas de São Paulo, classes sociais C, D e E, com privilégio para pessoas que entrem em recortes sociais de raça e gênero.',
  imgStart: true,
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'depoimentos',
  lightBg: true,
  lightText: false,
  img: Template2,
  button: false,
  lightTextDesc: false,
  headline: 'Depoimentos',
  description:
    '“O curso tem me incentivado a olhar o que tem de melhor dentro de mim e expressar isso da melhor forma. A troca de vivência com os outro alunos é muito boa e válida para a gente entender como cada pessoa é importante nesse processo.”',
  description2:
    '“Eu voltei com uma outra cabeça para o mundo corporativo. Tentando aplicar todas as dicas que eles deram sobre comportamento, liderança.”',
  description3: '"Uma equipe sempre muito disposta a ajudar todo mundo."',
  imgStart: false,
  dark: false,
  primary: true,
  darkText: true
};

export const homeObjFour = {
  id: 'apoio',
  lightBg: true,
  lightText: false,
  img: Template2,
  button: true,
  lightTextDesc: false,
  headline: 'Apoio',
  description:
    'Buscamos apoio com foco em formação de talentos periféricos para o mercado de trabalho. Se você gosta de educação e pessoas, entre em contato com a gente! ',

  imgStart: false,
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjFive = {
  id: 'contato',
  lightBg: true,
  lightText: false,
  img: QrCode,
  button: false,
  lightTextDesc: false,
  headline: 'Contato',
  description:
    'Quer saber mais sobre os cursos, quer apoiar nosso projeto ou tem alguma dúvida? Entre em contato com a gente através do código QR.',

  imgStart: false,
  dark: false,
  primary: false,
  darkText: true
};
