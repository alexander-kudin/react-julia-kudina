import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import artworksReducer from './artworksReducer.js';
import seriesReducer from './seriesReducer.js';
import exhibitionsReducer from './exhibitionsReducer.js';

let reducers = combineReducers({ 
    artworksReducer,
    seriesReducer,
    exhibitionsReducer
});

let store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;