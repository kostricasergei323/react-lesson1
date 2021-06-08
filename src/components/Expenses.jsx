import '../css/Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expenses = () => {
    return (
        <div className="expenses">
            <ExpenseFilter />
            <ExpensesList />
        </div>
    );
}

export default Expenses;
