import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Component/Root/Root';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducers from './reducers';
import{Provider} from 'react-redux';


const myStore=createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    ;

    // ReactDOM.render(<Root />, document.getElementById('root'));


ReactDOM.render(
    <Provider store={myStore}>
        <Root />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
