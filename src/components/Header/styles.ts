import styled from "styled-components";

export const Container= styled.div`
    background: var(--blue);
    
`

export const Content= styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem 12rem;

    button{
        font-size: 1rem;
        color: #fff;
        background-color: var(--light-blue);
        border: 0;
        padding: 0 2rem;
        border-radius: .25rem;
        height: 3rem;
        transition: filter .2s;
        &:hover{
            filter: brightness(.9);
        }
    }

`