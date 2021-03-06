import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import RootReducer from './store/reducers/RootReducer'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'

const store = createStore(RootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
