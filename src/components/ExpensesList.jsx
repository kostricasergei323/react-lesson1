import { useSelector } from 'react-redux';
import '../css/ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = () => {
    const filteredExpenses = useSelector(state => state.expenses.filteredExpenses);

    return (
        <div className="expenses-list">
            {filteredExpenses.map(exp => <ExpenseItem key={exp.key} Title={exp.Title} Date={exp.Date} Amount={exp.Amount} />)}
        </div>
    );
}

export default ExpensesList;
