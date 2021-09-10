import { applyMiddleware, compose, createStore } from 'redux';
import { reducer } from '../reducers/reducer';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware()))

// const store = createStore(reducer);
export default store;