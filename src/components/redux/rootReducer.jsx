import { combineReducers } from 'redux';
import { expenseFormReducer } from './expenseFormReducer';
import { expenseReducer } from './expenseReducer';

export const rootReducer = combineReducers({
    expenses: expenseReducer,
    showAddNewExpense: expenseFormReducer
});