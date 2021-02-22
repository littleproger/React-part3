import React from 'react';
import {render} from 'react-dom';
import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import {sagaWatcher} from './sagas/mainSagas';
import { mainReducer } from './reducers/mainReducer';
import './index.css';
import App from './App';

const saga = createSagaMiddleware()

const store = createStore(
  mainReducer,
  compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
 );
saga.run(sagaWatcher);
 
const app = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}/>
    </Router>
  </Provider>
);

render(
  app,
  document.getElementById('root')
);
