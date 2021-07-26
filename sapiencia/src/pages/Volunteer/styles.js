import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 9vh;
  height: 100%;
  min-height: 100vh;
  max-width: 30rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 500px) {
    padding-top: 22vh;
  }
`;

export const Container = styled.div `
  display: flex;
  margin-bottom: 20px;
`

