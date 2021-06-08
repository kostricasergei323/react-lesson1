import '../css/ExpensesList.css';
import ExpenseItem from './ExpenseItem';
import { Context } from './context';
import { useContext, useEffect } from 'react';

const ExpensesList = () => {
    const { expenses: { expenses }, filteredExpenses: { filteredExpenses, setFilteredExpenses } } = useContext(Context);

    useEffect(() => {
        setFilteredExpenses(expenses);
    }, [expenses, setFilteredExpenses]);

    return (
        <div className="expenses-list">
            {filteredExpenses.map(exp => <ExpenseItem key={exp.key} Title={exp.Title} Date={exp.Date} Amount={exp.Amount} />)}
        </div>
    );
}

export default ExpensesList;
