// Polyfills
// import 'babel-polyfill';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';

const store = configureStore();
// Component
import App from './react-components/App';

document.addEventListener('DOMContentLoaded',() => {
   // react app
  ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('react-app'));
});
