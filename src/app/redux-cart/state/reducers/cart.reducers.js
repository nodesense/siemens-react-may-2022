//cart.reducer.js
// reducer code here
import * as ActionTypes from '../action-types';

function  recalculate(items) {
    let totalItems = 0, 
        amount = 0;

    for (let item of items) {
        amount += item.price * item.qty;
        totalItems += item.qty;
    }

    return {
        amount,
        totalItems
    }
}

const INITIAL_STATE = {
    items: [],
    amount: 0,
    totalItems: 0
}

// first arg is state of any type [numer, string, objet, array etc]
    // very begining state shall be undefined, safe to intitialize default state
// second arg is action from dispatch(action)

export const cartReducer = (state = INITIAL_STATE, action) => {
    console.log("cartReducer", state, action)
    switch (action.type) {
        case ActionTypes.ADD_ITEM_TO_CART: {
            // add item with immutablity
            const items = [...state.items, action.payload.item]
            const {amount, totalItems} = recalculate(items)

            return {items, amount, totalItems}
        }
        case ActionTypes.REMOVE_ITEM_FROM_CART: {
            const items = state.items.filter (item => item.id != action.payload.id)
            return {items, ...recalculate(items)}
        }
        case ActionTypes.UPDATE_ITEM_IN_CART: {
            const items = state.items.map(item => item.id == action.payload.id? 
                                            {...item, qty: action.payload.qty} : item)

            return {items, ...recalculate(items)}                      
        }
        case ActionTypes.EMPTY_CART: {
            const items = []
            return {items, ...recalculate(items)}                      
        }

        default: return state;
    }
}
