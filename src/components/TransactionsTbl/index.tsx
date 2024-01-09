import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";


export function TransactionsTbl(){
    useEffect(()=>{
        api.get('transactions')
        .then(response=> console.log(response.data))
        
    },[])
    // const[transactions, ]
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>App Development</td>
                        <td className="deposit">$400</td>
                        <td>Dev</td>
                        <td>01/04/2024</td>
                    </tr>
                    <tr>
                        <td>Rent</td>
                        <td className="withdraw">- $700</td>
                        <td>House</td>
                        <td>01/04/2024</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}