import { Summary } from "../Summary";
import { TransactionsTbl } from "../TransactionsTbl";
import { Container } from "./styles";

export function Dashboard(){

    return(
        <Container>
            <Summary/>
            <TransactionsTbl/>
        </Container>

    )
}