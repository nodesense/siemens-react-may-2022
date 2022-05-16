// loggler.middleware.js
// middleware, placed between dispatch and reducers
// middlware can be chained means more than one middleware
// middleware shall see all the actions dispatched
// middleware instrument action means change
// middleware stop action etc

export function logger(store) {
    // called once
    // store is result of createStore
    // using store, store.dispatch, store.getState
    // we can check cache, if cache already exist, stop action in action func below
    return function(next) {
        // called once, websocket, timer
        // next is fucntion, that forward action to next middleware/reducer
        return function(action) {
            // called for every dispatch    
            console.log("LOGGER Middleware calling next ", action)
            const result = next(action)
            console.log("LOGGERMIDDLWARE done...")
            return result;
        }
    }
}

//es6, above and current code same
export const loggerES6 = store => next => action => next(action)