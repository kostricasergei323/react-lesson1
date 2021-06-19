import { ADD_EXPENSE, ADD_FILTER_EXPENSE, SET_EXPENSES } from "./types"

export const addExpense = (expense) => {
    return {
        type: ADD_EXPENSE,
        payload: expense
    }
}

export const setExpenses = (expenses) => {
    return {
        type: SET_EXPENSES,
        payload: expenses
    }
}

export const addFilterExpense = (filterExpense) => {
    return {
        type: ADD_FILTER_EXPENSE,
        payload: filterExpense
    }
}