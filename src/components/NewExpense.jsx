import React, { useState, useEffect, useRef } from 'react';
import '../css/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const visibleStyle = {
    visibility: "visible"
};

const hiddenStyle = {
    visibility: "hidden"
};

const NewExpense = () => {
    const formRef = useRef(null);

    const AddNewExpense = (e) => {
        e.nativeEvent.preventDefault();
        formRef.current.style = visibleStyle;
    };

    return (
        <div className="new-expense">
            <button className="new-expense button" onClick={AddNewExpense}>Add New Expense</button>
            <div ref={formRef} style={hiddenStyle}>
                <ExpenseForm/>
            </div>
        </div>);
}

export default NewExpense;