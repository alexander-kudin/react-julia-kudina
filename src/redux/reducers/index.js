import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Reducers
import artworksReducer from './artworksReducer'
import seriesReducer from './seriesReducer'
import exhibitionsReducer from './exhibitionsReducer'
import layoutReducer from './layoutReducer'

let rootReducer = combineReducers({
    artworksReducer,
    seriesReducer,
    exhibitionsReducer,
    layoutReducer,
})

let store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store