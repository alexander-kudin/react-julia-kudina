import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Reducers
import layoutReducer from './layoutReducer'

let rootReducer = combineReducers({
    layoutReducer,
})

let store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store