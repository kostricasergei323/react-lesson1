import { HIDE_ADD_EXPENSE_FORM, SHOW_ADD_EXPENSE_FORM } from "./types";

const initState = {
    showAddNewExpense: false
}

export const expenseFormReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_ADD_EXPENSE_FORM:
            return { ...state, showAddNewExpense: true };
        case HIDE_ADD_EXPENSE_FORM:
            return { ...state, showAddNewExpense: false };
        default:
            return state;
    }
}