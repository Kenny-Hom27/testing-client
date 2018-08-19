import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Welcome from './components/Welcome';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Welcome} />
    </App>
  </BrowserRouter>,
  document.querySelector('#root')
);
