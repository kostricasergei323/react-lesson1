import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { SHOW_ADD_EXPENSE_FORM } from './redux/types';

const visibleStyle = {
    display: "unset"
};

const hiddenStyle = {
    display: "none"
};

const NewExpense = () => {
    const dispatch = useDispatch();
    const { showAddNewExpense } = useSelector(state => state.showAddNewExpense);

    const AddNewExpense = (e) => {
        e.preventDefault();
        dispatch({
            type: SHOW_ADD_EXPENSE_FORM
        });
    };

    return (
        <div className="new-expense">
            <button style={!showAddNewExpense ? visibleStyle : hiddenStyle} onClick={AddNewExpense}>Add New Expense</button>
            <div style={!!showAddNewExpense ? visibleStyle : hiddenStyle}>
                <ExpenseForm />
            </div>
        </div>);
}

export default NewExpense;