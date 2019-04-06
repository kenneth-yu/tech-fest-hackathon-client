import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { routerMiddleware, ConnectedRouter} from 'connected-react-router'
import reducer from './Redux/reducer'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory()

const store = createStore(
  reducer,
  applyMiddleware(thunk)
  // composeEnhancers(
  //   applyMiddleware(
  //     routerMiddleware(history),
  //     thunk
  //   ),
  // ),
)

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
