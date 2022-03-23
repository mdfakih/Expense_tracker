import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import './Expenses.css'
import { useState } from "react"
import ExpenseList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

const Expenses = ({ items }) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYr => {
        setFilteredYear(selectedYr)
    }

    const render_items = items.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear
    )

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onYearSelect={filterChangeHandler} />
                <ExpensesChart filteredExpense={render_items} />
                <ExpenseList items={render_items} />
            </Card>
        </div>
    )
}

export default Expenses