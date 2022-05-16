// store.js
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { cartReducer } from '../redux-cart/state/reducers/cart.reducers';
import { logger } from './middlewares/logger.middleware';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cart: cartReducer
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store; 