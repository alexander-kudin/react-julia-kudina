import { combineReducers } from 'redux';

import artworksReducer from './artworksReducer.js';
import seriesReducer from './seriesReducer.js';
import exhibitionsReducer from './exhibitionsReducer.js';

export default combineReducers({ 
    artworksReducer, 
    seriesReducer, 
    exhibitionsReducer 
});