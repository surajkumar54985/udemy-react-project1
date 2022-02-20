import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear , setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(Expense => {
        return Expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {filteredExpenses.map((Expense) => (
                    <ExpenseItem key={Expense.id} title={Expense.title} amount={Expense.amount} date={Expense.date} />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;