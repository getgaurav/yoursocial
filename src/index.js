import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StylesProvider } from '@material-ui/styles';

ReactDOM.render(
  <React.StrictMode>
     <StylesProvider injectFirst>
 
      <App />
      </StylesProvider>
  </React.StrictMode>,
  document.getElementById('app')
);

serviceWorker.unregister();
