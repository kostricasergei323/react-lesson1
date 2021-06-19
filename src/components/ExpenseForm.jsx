import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import calendar from '../calendar.svg';
import '../css/ExpenseForm.css';
import { addExpense } from './redux/actions';
import { HIDE_ADD_EXPENSE_FORM } from './redux/types';

const ExpenseForm = () => {
    const formRef = useRef(null);
    const dispatch = useDispatch();
    const expenseState = useSelector(state => state.expenses).expenses;
    const [formState, setFormState] = useState({
        key: 0,
        Title: '',
        Amount: '',
        Date: ''
    });

    const clearFormInputsAndCloseForm = () => {
        setFormState({
            key: 0,
            Title: '',
            Amount: '',
            Date: ''
        });
        dispatch({
            type: HIDE_ADD_EXPENSE_FORM
        });
    };

    const fillCurrentDate = (e) => {
        e.preventDefault();
        e.target.parentNode.firstChild.value = new Date().toLocaleDateString().replaceAll(".", "-");
    };

    const cancelSubmit = (e) => {
        e.preventDefault();
        clearFormInputsAndCloseForm();
    };

    const addSubmit = (e) => {
        e.preventDefault();
        const [title, amount, date] = formRef.current;

        if (!title.value || !amount.value || !date.value || !/[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}/.test(date.value)) return;
        dispatch(addExpense([{
            key: Array.isArray(expenseState) && expenseState.length > 0 ? expenseState.slice(-1)[0].key + 1 : 0,
            Title: title.value,
            Amount: amount.value,
            Date: date.value,
        }]));
        clearFormInputsAndCloseForm();
    };

    return (
        <>
            <form ref={formRef} className="new-expense__control">
                <div>
                    <label>Title</label>
                    <input type="text" value={formState.Title} onChange={(e) => setFormState(prev => ({ ...prev, Title: e.target.value }))} />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="text" value={formState.Amount} onChange={(e) => setFormState(prev => ({ ...prev, Amount: e.target.value }))} />
                </div>
                <div>
                    <label>Date</label>
                    <span>
                        <input type="text" value={formState.Date} maxLength="10" onChange={(e) => setFormState(prev => ({ ...prev, Date: e.target.value }))} />
                        <input type="image" src={calendar} alt="calendar" onClick={fillCurrentDate} />
                    </span>
                </div>
            </form>

            <div className="new-expense__actions">
                <button onClick={cancelSubmit}>Cancel</button>
                <button onClick={addSubmit}>Add Expense</button>
            </div>
        </>
    );
};

export default ExpenseForm;