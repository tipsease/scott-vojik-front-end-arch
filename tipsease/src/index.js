import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger"
import { BrowserRouter as Router } from "react-router-dom"

import authenticate from "./Components/Authenticate/authenticate"
import Login from "./Components/Login/Login"

import rootReducer from "./store/reducers"

const ConditionalView = authenticate(App)(Login)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(<Provider store={store}><Router><ConditionalView /></Router></Provider>, document.getElementById('root'));

