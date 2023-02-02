import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import {
	PriceHighlight,
	TransactionsContainer,
	TransactionsTable,
} from './styles';

export function Transactions() {
	return (
		<div>
			<Header />
			<Summary />
			<TransactionsContainer>
				<SearchForm />
				<TransactionsTable>
					<tbody>
						<tr>
							<td width="50%">Web Dev</td>
							<td>
								<PriceHighlight variant="income">$12000</PriceHighlight>
							</td>
							<td>Sold</td>
							<td>12/26/2023</td>
						</tr>
						<tr>
							<td width="50%">Food</td>
							<td>
								<PriceHighlight variant="outcome">- $3000</PriceHighlight>
							</td>

							<td>Sold</td>
							<td>10/26/2023</td>
						</tr>
					</tbody>
				</TransactionsTable>
			</TransactionsContainer>
		</div>
	);
}
