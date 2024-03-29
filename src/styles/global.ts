import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #f0f2f5;
    --green: #33CC95;
    --red: #E52E4D;
    --blue: #5429CC;
    --light-blue: #6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #fff;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

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
    background: var(--background);

}
body, input, textarea, button{
    font-family: 'Robotto', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 700;
}
button{
    cursor: pointer;
}
[disbled]{
    opacity: .6;
    cursor: not-allowed;
}
.react-modal-overlay{
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

}
.react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: .25rem;
    

}
.react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter .2s;

    &:hover(
        filter: brightness(.8);
    )

}

`

