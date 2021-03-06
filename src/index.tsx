import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { CombinedProviders } from './components/CombinedProviders';

// TODO: reactivate StrictMode when material-ui fixed problems with StrictMode
ReactDOM.render(
  // <React.StrictMode>
  <CombinedProviders>
    <App />
  </CombinedProviders>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
