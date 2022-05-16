// store.js
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { cartReducer } from '../redux-cart/state/reducers/cart.reducers';
import { logger } from './middlewares/logger.middleware';

import thunk from 'redux-thunk';
import { productReducer } from '../redux-cart/state/reducers/product.reducers';

const rootReducer = combineReducers({
    cart: cartReducer,
    productState: productReducer
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store; 