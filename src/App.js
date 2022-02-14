import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
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
  return (
    <div className="App">
        <h2>Let's get started!</h2>
        <Expenses items={expenses} />
    </div>
  );
}

export default App;
