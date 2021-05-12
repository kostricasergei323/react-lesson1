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
            <form>
                <div>
                    <label className="new-expense__control label" >Title</label>
                    <input type="text" className="new-expense__control input" />
                </div>
                <div>
                    <label className="new-expense__control label" >Amount</label>
                    <input type="text" className="new-expense__control input" />
                </div>
                <div>
                    <label className="new-expense__control label" >Date</label>
                    <input type="text" className="new-expense__control input" />
                </div>
            </form>

            <div className="new-expense__actions">
                <input type="submit" className="new-expense__actions" onSubmit={cancelSubmit} value="Cancel" />
            </div>
            <div className="new-expense__actions">
                <input type="submit" className="new-expense__actions" onSubmit={addSubmit} value="Add Expense" />
            </div>
        </>
    );
};

export default ExpenseForm;