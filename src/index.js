import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {Provider} from 'react-redux';
// import store from './js/store/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();