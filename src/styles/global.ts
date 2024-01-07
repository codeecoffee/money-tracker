import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
        
    }
    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }
    body{
        background-color: ${(props) =>props.theme["background"]};
        /* color: ${(props) => props.theme['gray-100']}; */
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button{
        font: 400 1rem Roboto, sans-serif;
    }
    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 700;
    }
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: .6;
        cursor: not-allowed;
    }

`;
