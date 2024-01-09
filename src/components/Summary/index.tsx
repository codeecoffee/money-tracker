import { Container } from "./styles";
import incoming from '../../assets/incoming.svg';
import outcoming from '../../assets/outcoming.svg';
import total from '../../assets/total.svg';

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>in</p>
                    <img src={incoming} alt="" />
                </header>
                <strong>$1000</strong>
            </div>
            <div>
                <header>
                    <p>out</p>
                    <img src={outcoming} alt="" />
                </header>
                <strong>$3000</strong>
            </div>
            <div className="highlight-bg">
                <header>
                    <p>Total</p>
                    <img src={total} alt="" />
                </header>
                <strong>$5000</strong>
            </div>
        </Container>
    )
}