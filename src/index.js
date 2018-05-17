import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout/Layout';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();

console.log(`Versión ${process.env.REACT_APP_VERSION}`);
