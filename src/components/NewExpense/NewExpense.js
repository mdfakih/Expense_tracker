import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        }
        // console.log(expenseData)
        onAddExpense(expenseData)
        setIsEditing(false)
    }


    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditingHandler}
            />}
        </div>
    )
}

export default NewExpense