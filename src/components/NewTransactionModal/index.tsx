import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg  from'../../assets/incoming.svg'
import outcomeImg from'../../assets/outcoming.svg'
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps{
    isOpen: boolean;
    onReqClose: ()=>void;
}

export function NewTransactionModal({isOpen, onReqClose}:NewTransactionModalProps){
    const {createTransaction} = useTransactions()

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event:FormEvent){
        event.preventDefault()
        await createTransaction({
            title,
            amount,
            category,
            type
        })
        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onReqClose()
    }
    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onReqClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onReqClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="close"/>
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>New Transaction</h2>
                <input 
                    type="text" 
                    placeholder='Title' 
                    value={title}
                     onChange={event=> setTitle(event.target.value)}
                />
                <input type="number" placeholder='Amount' value={amount} onChange={event=> setAmount(Number(event.target.value))}/>
                <TransactionTypeContainer>
                    <RadioBox  
                        type='button' 
                        onClick={()=>setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"    
                    >
                        <img src={incomeImg} alt="" />
                        <span>in</span>
                    </RadioBox>
                    <RadioBox  
                        type='button' 
                        onClick={()=>setType('withdraw')}
                        isActive={type === 'withdraw'}   
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="" />   
                        <span>out</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input 
                    type="text" 
                    placeholder='Category'  
                    onChange={event=> setCategory(event.target.value)}
                    value={category}
                />
                <button type="submit">Submit</button>
            </Container>
        </Modal>
    )
}