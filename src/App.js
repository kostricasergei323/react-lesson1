import React, { useRef, useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import { Context } from './components/context';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  let newExpenseformRef = useRef(null);
  let addNewExpenseRef = useRef(null);
  let filterRef = useRef(null);

  return (
    <Context.Provider value={{
      expenses: {
        expenses,
        setExpenses
      },
      filteredExpenses: {
        filteredExpenses,
        setFilteredExpenses
      }, 
      newExpenseformRef, addNewExpenseRef, filterRef
    }}>
      <div>
        <NewExpense />
        <Expenses />
      </div>
    </Context.Provider>
  );
}

export default App;
