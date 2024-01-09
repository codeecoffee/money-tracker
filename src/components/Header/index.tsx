import { Container, Content } from "./styles";
import logoImg from '../../assets/Logo.svg'

import Modal from 'react-modal'

interface HeaderProps{
    onOpenNewTransactionModal: ()=>void;
}

export function Header({onOpenNewTransactionModal}:HeaderProps){
    
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="logo" />
                <button type="button" onClick={onOpenNewTransactionModal}>New transaction</button>
               
            </Content>
        </Container>
    )
}