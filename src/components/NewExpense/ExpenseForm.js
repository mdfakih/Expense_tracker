import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {

    const [entered_title, setEntered_title] = useState('')
    const [entered_amount, setEntered_amount] = useState('')
    const [entered_date, setEntered_date] = useState('')

    const titleChangeHandler = e => {
        setEntered_title(e.target.value)
    }

    const amountChangeHandler = e => {
        setEntered_amount(e.target.value)
    }

    const dateChangeHandler = e => {
        setEntered_date(e.target.value)
    }

    const [addExpense, setAddExpense] = useState(false)

    const clickHandlerForm = () => {
        setAddExpense(!addExpense)
    }

    const submitHandler = e => {
        e.preventDefault()
        const expenseData = {
            title: entered_title,
            amount: +entered_amount,
            date: new Date(entered_date)
        }
        onSaveExpenseData(expenseData)
        setEntered_title('')
        setEntered_amount('')
        setEntered_date('')
        clickHandlerForm()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                        value={entered_title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01'
                        value={entered_amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31'
                        value={entered_date}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button
                    type='button'
                    onClick={onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm