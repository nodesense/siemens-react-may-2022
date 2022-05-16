// reducers/product.reducers.js
import * as ActionTypes from '../action-types'

const INITIAL_STATE = {
    loading: false,
    products: []
}

export const productReducer = (state = INITIAL_STATE, action) => {
    console.log("productReducer called", state, action)
    switch (action.type) {
        //take specific property from payload
        case ActionTypes.INIT_LOADING: return {...state, loading: action.payload.loading}
        // payload: {products: []}, take all properties from payload
        case ActionTypes.INIT_PRODUCTS: return {...state, ...action.payload}
          default: return state
    }
}