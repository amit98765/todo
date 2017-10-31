// this file serves as the base of the app.
// this file will create the store and call the main component

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './reducers';
import {createStore} from 'redux';                           

import App from './components/App';

stores = createStore(store);

ReactDOM.render(<Provider store={stores}>
    <App />
</Provider>,
    document.getElementById('app'));