import { useState, useEffect } from 'react';
import '../css/ExpenseForm.css';

const ExpenseForm = () => {

    const cancelSubmit = (e) => {
        e.nativeEvent.preventDefault();
    };

    const addSubmit = (e) => {
        e.nativeEvent.preventDefault();
    };

    return (
        <>
            <form className="new-expense__control">
                <div>
                    <label>Title</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Amount</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Date</label>
                    <input type="text"/>
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