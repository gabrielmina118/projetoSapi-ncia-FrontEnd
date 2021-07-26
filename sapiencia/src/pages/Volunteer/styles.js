import styled from 'styled-components'

export const FormContainer = styled.div `
    display: flex;
    flex-direction: column;
    padding-top: 9vh;
    height: 100%;
    min-height: 100vh;
    max-width: 80vw;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 500px) {
        padding-top: 22vh;
    }
`