import React from 'react';
import { useState } from 'react';

import ExpenseForm from './expenseForm';

import './newExpense.css';

const NewExpense = (props) => {

    const [isEditing,setisEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setisEditing(false);
    };

    const startEditingHandler = () => {
        setisEditing(true);
    };

    const stopEditingHandler = () => {
        setisEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
};
export default NewExpense;