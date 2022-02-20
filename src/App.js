import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/newExpense/newExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';

const DUMMY_EXPENSES = [
  {
    id:'i1',
    title:'Toilet Paper',
    amount: 95.28,
    date: new Date(2022,1,21),
  },{
    id:'i2',
    title:'Sand Paper',
    amount: 295.28,
    date: new Date(2022,1,29),
  },{
    id:'i3',
    title:'Electricity bill',
    amount: 1095.28,
    date: new Date(2022,2,1),
  },{
    id:'i4',
    title:'Flat Rent',
    amount: 3509.28,
    date: new Date(2022,2,5),
  }
]

const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    console.log(expense);
    // setExpenses([...expenses , expense]);
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      // return [...prevExpenses , expense];
      return [expense, ...expenses];
    });
  };
  

  return (
    <div className="App">
        <h2>Let's get started!</h2>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
    </div>
  );
}

export default App;
