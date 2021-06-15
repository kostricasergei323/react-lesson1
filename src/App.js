import React, { useRef, useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import { Context } from './components/context';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const newExpenseformRef = useRef(null);
  const addNewExpenseRef = useRef(null);
  const filterRef = useRef(null);

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
      <>
        <NewExpense />
        <Expenses />
      </>
    </Context.Provider>
  );
}

export default App;
