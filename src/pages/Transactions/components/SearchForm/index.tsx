import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { useContextSelector } from 'use-context-selector';
import * as zod from 'zod';
import { TransactionsContext } from '../../../../contexts/TransactionContext';
import { SearchFormContainer } from './styles';

const searchSchema = zod.object({
	query: zod.string(),
});

type SearchFormInput = zod.infer<typeof searchSchema>;

export function SearchForm() {
	const fetchTransactions = useContextSelector(
		TransactionsContext,
		(context) => context.fetchTransactions
	);

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SearchFormInput>({
		resolver: zodResolver(searchSchema),
	});

	async function handleSearchTransactions(data: SearchFormInput) {
		await fetchTransactions(data.query);
	}

	return (
		<SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
			<input
				type="text"
				placeholder="Search transactions"
				{...register('query')}
			/>
			<button type="submit" disabled={isSubmitting}>
				<MagnifyingGlass size={20} />
				Search
			</button>
		</SearchFormContainer>
	);
}
