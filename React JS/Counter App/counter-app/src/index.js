import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Counter from './counter';
// import Alert from './alert';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Counter/>, document.getElementById('root'));
registerServiceWorker();
