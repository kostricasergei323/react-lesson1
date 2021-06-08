import React, { useContext } from 'react';
import ExpenseForm from './ExpenseForm';
import { Context } from './context';
import '../css/NewExpense.css';

const visibleStyle = {
    display: "unset"
};

const hiddenStyle = {
    display: "none"
};

const NewExpense = () => {
    let { newExpenseformRef, addNewExpenseRef } = useContext(Context);

    const AddNewExpense = (e) => {
        e.nativeEvent.preventDefault();
        addNewExpenseRef.current.style = "display: none";
        newExpenseformRef.current.style = "display: unset";
    };

    return (
        <div className="new-expense">
            <button ref={addNewExpenseRef} style={visibleStyle} onClick={AddNewExpense}>Add New Expense</button>
            <div ref={newExpenseformRef} style={hiddenStyle}>
                <ExpenseForm />
            </div>
        </div>);
}

export default NewExpense;