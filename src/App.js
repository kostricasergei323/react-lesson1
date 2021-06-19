import React from 'react';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import { rootReducer } from './components/redux/rootReducer';

const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const App = () => {
  return (
    <Provider store={store}>
      <>
        <NewExpense />
        <Expenses />
      </>
    </Provider>
  );
}

export default App;