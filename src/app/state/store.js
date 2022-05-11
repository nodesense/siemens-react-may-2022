// store.js
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { cartReducer } from '../redux-cart/state/reducers/cart.reducers';

const rootReducer = combineReducers({
    cart: cartReducer
})

const store = createStore(rootReducer)

export default store; 