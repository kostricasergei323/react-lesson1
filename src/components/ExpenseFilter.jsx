import { useCallback, useContext, useEffect, useState } from 'react';
import { Context } from './context';
import '../css/ExpenseFilter.css';

const ExpenseFilter = () => {
    const { expenses: { expenses }, filteredExpenses: { setFilteredExpenses }, filterRef } = useContext(Context);
    const [filterOptions, setFilterOptions] = useState([{
        key: 0,
        option: '-'
    }]);

    const FilterExpenses = useCallback((value) => {
        if (value === '-') {
            setFilteredExpenses(expenses);
        }
        else setFilteredExpenses(expenses.filter(exp => parseInt(exp.Date.split('-')[2]) === parseInt(value)));
    }, [expenses, setFilteredExpenses]);

    useEffect(() => {
        let i = 0;
        setFilterOptions([
            {
                key: 0,
                option: '-'
            },
            ...expenses.map((exp) => {
                return {
                    key: ++i,
                    option: parseInt(exp.Date.split('-')[2])
                };
            }).sort((a, b) => a.option - b.option)])
    }, [expenses, setFilterOptions]);

    useEffect(() => {
        FilterExpenses(filterRef.current.value);
    }, [filterOptions, filterRef, FilterExpenses]);

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select ref={filterRef} defaultValue='-' onChange={(e) => FilterExpenses(e.target.value)}>
                    {filterOptions.map(option => <option key={option.key}>{option.option}</option>)}
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;
