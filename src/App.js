import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import todoApp from './store/reducers';
import TodoApp from './TodoApp';



function App() {

  return (
    <Provider store = {createStore(todoApp)}>
      <TodoApp />
    </Provider>
  );
}

export default App;
