import { addItemToCart } from "./redux-cart/state/actions/cart.actions";
import store from "./state/store";

console.log("redux learning")

let state = store.getState()
console.log("redux State", state)

// susbcribe with callback
// callback is called at end of dispatch after all reducers
// susbcribe returns a function that will be useful to remove susbcription
// call unsub if we don't want notification
// susbcribe is called whetehr state is changed or not
const unsub = store.subscribe ( () => {
    // susbcribe callback
    // no arg passed to callback, we cant know what is changed
    const s = store.getState()
    console.log("At subscribe ", s)
})

// calling action creator, that creates action and return action
const action = addItemToCart(1, 'phone 1', 10000)
console.log("Action is ", action, typeof(action))

console.log("Dispatching action ", action)
// calls reducer
// sync call, calls middleware if there, then calls reducers, then susbcribe func
store.dispatch(action)
console.log("Dispatched action")

state = store.getState()

console.log("Updated state is ", state)

console.log("unsubcribe")
unsub() // now callback won't be called

store.dispatch(addItemToCart(2, "phone 2", 8000))

state = store.getState()

console.log("Updated state is ", state)

// DIY: removeItemFromCart(1), updateItemInCart(2, 5), emptyCart()