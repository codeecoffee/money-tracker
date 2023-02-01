import logo from '../../assets/igniteLogo.svg';
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
export function Header(){
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />
                <NewTransactionButton>New Transaction</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}