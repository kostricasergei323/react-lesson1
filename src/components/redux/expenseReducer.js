import { ADD_EXPENSE, ADD_FILTER_EXPENSE, SET_EXPENSES } from './types';

const initState = {
    expenses: [],
    filteredExpenses: []
}

export const expenseReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            if(!!action.payload.length)
                return { ...state, expenses: [...state.expenses, ...action.payload] };
            return state;
        case ADD_FILTER_EXPENSE:
            if(!!action.payload.length)
                return { ...state, filteredExpenses: [...state.filteredExpenses, ...action.payload] };
            return state;
        case SET_EXPENSES:
            if(!!action.payload.length)
                return { ...state, filteredExpenses: action.payload };
            return state;
        default:
            return state;
    }
}