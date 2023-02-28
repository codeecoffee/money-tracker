import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import { useContextSelector } from 'use-context-selector';
import * as zod from 'zod';
import { TransactionsContext } from '../../contexts/TransactionContext';
import {
	CloseButton,
	Content,
	Overlay,
	TransactionType,
	TransactionTypeButton,
} from './styles';
const newTransactionFormSchema = zod.object({
	description: zod.string(),
	price: zod.number(),
	category: zod.string(),
	type: zod.enum(['income', 'outcome']),
});

type NewTransactionFormInput = zod.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
	const createTransaction = useContextSelector(
		TransactionsContext,
		(context) => context.createTransaction
	);
	const {
		control,
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = useForm<NewTransactionFormInput>({
		resolver: zodResolver(newTransactionFormSchema),
		defaultValues: {
			type: 'income',
		},
	});

	async function handleCreateNewTransaction(data: NewTransactionFormInput) {
		const { description, category, price, type } = data;
		await createTransaction({
			description,
			category,
			price,
			type,
		});
		reset();
	}

	return (
		<Dialog.Portal>
			<Overlay />
			<Content>
				<Dialog.Title>New Transaction</Dialog.Title>
				<CloseButton>
					<X size={24} />
				</CloseButton>
				<form onSubmit={handleSubmit(handleCreateNewTransaction)}>
					<input
						type="text"
						placeholder="Description"
						required
						{...register('description')}
					/>
					<input
						type="number"
						placeholder="Price"
						required
						{...register('price', { valueAsNumber: true })}
					/>
					<input
						type="text"
						placeholder="Category"
						required
						{...register('category')}
					/>
					<Controller
						control={control}
						name="type"
						render={({ field }) => {
							return (
								<TransactionType
									onValueChange={field.onChange}
									value={field.value}
								>
									<TransactionTypeButton variant="income" value="income">
										<ArrowCircleUp size={24} />
										Income
									</TransactionTypeButton>
									<TransactionTypeButton variant="outcome" value="outcome">
										<ArrowCircleDown size={24} />
										Outcome
									</TransactionTypeButton>
								</TransactionType>
							);
						}}
					/>

					<button type="submit" disabled={isSubmitting}>
						Add
					</button>
				</form>
			</Content>
		</Dialog.Portal>
	);
}
