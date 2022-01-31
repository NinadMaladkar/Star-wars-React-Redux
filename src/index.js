import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from './components/App';
import reducers from './reducers';
import FleetStarshipDetails from './components/FleetStarshipDetails';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" exact component={App} />
      <Route path="/details/" exact component={FleetStarshipDetails} />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
