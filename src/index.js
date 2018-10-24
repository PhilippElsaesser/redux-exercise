import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import allReducers from './reducers/allReducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(allReducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>   
    , document.getElementById('root'));

