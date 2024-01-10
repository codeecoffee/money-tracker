import { Container } from "./styles";
import incoming from '../../assets/incoming.svg';
import outcoming from '../../assets/outcoming.svg';
import total from '../../assets/total.svg';
import { useTransactions } from "../../hooks/useTransactions";

export function Summary(){

    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {

        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total+= transaction.amount
        
        }
        else {
            acc.withdraw+= transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    },{
        deposits: 0, 
        withdraw: 0, 
        total: 0
    })



    return(
        <Container>
            <div>
                <header>
                    <p>in</p>
                    <img src={incoming} alt="" />
                </header>
                <strong> 
                {new Intl.NumberFormat('en-US',{
                        style: 'currency',
                        currency: 'USD'
                    }).format(summary.deposits)
                }

                </strong>
            </div>
            <div>
                <header>
                    <p>out</p>
                    <img src={outcoming} alt="" />
                </header>
                <strong>-
                {new Intl.NumberFormat('en-US',{
                        style: 'currency',
                        currency: 'USD'
                    }).format(summary.withdraw)
                }
                </strong>
            </div>
            <div className="highlight-bg">
                <header>
                    <p>Total</p>
                    <img src={total} alt="" />
                </header>
                <strong> 
                {new Intl.NumberFormat('en-US',{
                        style: 'currency',
                        currency: 'USD'
                    }).format(summary.total)
                }    
                    
                </strong>
            </div>
        </Container>
    )
}