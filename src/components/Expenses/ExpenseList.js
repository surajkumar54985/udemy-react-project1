import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
    if(props.items.length === 0)
    {
        return (<h2 className="expenses-list__fallback">No expense found!</h2>);
    }

    return (
        <ul className="expenses-list">
            {props.items.map((Expense) => (
                <ExpenseItem key={Expense.id} title={Expense.title} amount={Expense.amount} date={Expense.date} />
            ))};
        </ul>
    )
}

export default ExpenseList;