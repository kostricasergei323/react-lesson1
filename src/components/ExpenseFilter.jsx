import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/ExpenseFilter.css';
import { setExpenses } from './redux/actions';

const ExpenseFilter = () => {
    const dispatch = useDispatch();
    const { expenses: { expenses: expensesState } } = useSelector(state => state);
    const [filterOptions, setFilterOptions] = useState([{
        key: 0,
        option: '-'
    }]);

    const FilterExpenses = useCallback((value) => {
        if (!!expensesState.length) {
            if (value === '-') {
                dispatch(setExpenses(expensesState))
            }
            else dispatch(setExpenses(expensesState.filter(exp => parseInt(exp.Date.split('-')[2]) === parseInt(value))));
        }
    }, [expensesState, dispatch]);

    useEffect(() => {
        let i = 0;

        setFilterOptions([
            {
                key: 0,
                option: '-'
            },
            ...[...new Set(expensesState.map(exp => parseInt(exp.Date.split('-')[2])))].map((date) => {
                return {
                    key: ++i,
                    option: date
                };
            }).sort((a, b) => a.option - b.option)])
    }, [expensesState, setFilterOptions]);

    useEffect(() => {
        FilterExpenses(document.getElementsByClassName("expenses-filter__control")[0].children[1].value);
    }, [filterOptions, FilterExpenses]);

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select defaultValue='-' onChange={(e) => FilterExpenses(e.target.value)}>
                    {filterOptions.map(option => <option key={option.key}>{option.option}</option>)}
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;
