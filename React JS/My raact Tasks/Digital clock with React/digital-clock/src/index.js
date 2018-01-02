import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Digitalclock from './Digitalclock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Digitalclock />, document.getElementById('root'));
registerServiceWorker();
