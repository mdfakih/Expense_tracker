
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = ({ title, amount, date }) => {

    return (
        <li>
            <Card className='expense-item'>
                {/* <div>{date.toISOString()}</div> */}
                <ExpenseDate date={date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${amount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem