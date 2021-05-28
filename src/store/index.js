import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import thund from 'redux-thunk'

const middleware = [thund]

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))

export default store