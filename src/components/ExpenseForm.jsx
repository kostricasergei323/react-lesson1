import React, { useContext, useRef, useState } from 'react';
import '../css/ExpenseForm.css';
import { Context } from './context';

const ExpenseForm = () => {
    const formRef = useRef(null);
    const [formState, setFormState] = useState({
        key: 0,
        Title: '',
        Amount: '',
        Date: ''
    });

    const { expenses: {setExpenses}, newExpenseformRef, addNewExpenseRef } = useContext(Context);

    const clearFormInputsAndCloseForm = () => {
        setFormState({
            key: 0,
            Title: '',
            Amount: '',
            Date: ''
        });
        newExpenseformRef.current.style = "display: none";
        addNewExpenseRef.current.style = "display: unset";
    };

    const cancelSubmit = (e) => {
        e.nativeEvent.preventDefault();
        clearFormInputsAndCloseForm();
    };

    const addSubmit = (e) => {
        e.nativeEvent.preventDefault();
        const [title, amount, date] = formRef.current;

        if (!title.value || !amount.value || !date.value) return;

        setExpenses(prev => prev.concat({
            key: Array.isArray(prev) && prev.length > 0 ? prev.slice(-1)[0].key + 1 : 0,
            Title: title.value,
            Amount: amount.value,
            Date: date.value,
        }));
        clearFormInputsAndCloseForm();
    };

    return (
        <>
            <form ref={formRef} className="new-expense__control">
                <div>
                    <label>Title</label>
                    <input type="text" value={formState.Title} onChange={(e) => setFormState((prev) => {
                        return { ...prev, Title: e.target.value };
                    })} />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="text" value={formState.Amount} onChange={(e) => setFormState((prev) => {
                        return { ...prev, Amount: e.target.value };
                    })} />
                </div>
                <div>
                    <label>Date</label>
                    <input type="text" value={formState.Date} onChange={(e) => setFormState((prev) => {
                        return { ...prev, Date: e.target.value };
                    })} />
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