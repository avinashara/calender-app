import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './js/store/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {getCalenderData} from './js/dataServices/dataService';

store.dispatch(getCalenderData());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();