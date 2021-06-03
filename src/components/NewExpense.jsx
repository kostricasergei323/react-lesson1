import React, { useState, useEffect, useRef } from 'react';
import '../css/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const visibleStyle = {
    display: "unset"
};

const hiddenStyle = {
    display: "none"
};

const NewExpense = () => {
    const formRef = useRef(null);
    const addNewExpenseRef = useRef(null);
    
    const AddNewExpense = (e) => {
        e.nativeEvent.preventDefault();
        formRef.current.style = "display: unset";
        addNewExpenseRef.current.style = "display: none";
    };

    return (
        <div className="new-expense">
            <button ref={addNewExpenseRef} style={visibleStyle} onClick={AddNewExpense}>Add New Expense</button>
            <div ref={formRef} style={hiddenStyle}>
                <ExpenseForm/>
            </div>
        </div>);
}

export default NewExpense;