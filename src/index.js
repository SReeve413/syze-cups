import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './Routing';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import Store from './store'

Store.subscribe(() => console.log(Store.getState()));

console.log("text");
const Wrapped = (
    <Provider store={Store}>
        <Route/>
    </Provider>
)

ReactDOM.render(Wrapped, document.getElementById('root'));
registerServiceWorker();
