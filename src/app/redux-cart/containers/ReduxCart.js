import {connect} from 'react-redux'
import ReduxCart from '../components/ReduxCart'
import * as cartActions from '../state/actions/cart.actions';
import {bindActionCreators} from 'redux';

// connect creates container component 
        // by glueing store, ReduxCart React component, mapStateToProps, mapDispatchToProps

// contract for ReduxCart as props
//    amount - from redux state
//    addItem, emptyCart - actions

// state = store.getState(), 
// container calls getState function and pass the state as arg here
// mapStateToProps is called by container
// when? Whenever there subscribe, because container component subscribe from redux store
// susbcribe called for every dispatch
// when no change in state, this function is not called
// should return props/properties needed for your react component
// pick only props you need, not entire state, unwanted properties
export const mapStateToProps = (state) => {
    console.log("**ReduxCart mapStateToProps", state)
    return {
        // only data to be passed here, not functions
        amount: state.cart.amount,

    }
}

// to be called only one per instance of the component
// return the functions that should be passed as props to component
// addItem, emptyCart
export const mapDispatchToProps = (dispatch, getState) => {
    console.log("**ReduxCart mapDispatchToProps")
    return {
        addItem: () => {
            const id = Math.ceil (Math.random() * 1000000)
            const item = {
                id, // id: id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: Math.ceil(Math.random() * 10),
            }

            const action = cartActions.addItemToCart(item.id, item.name, item.price)
            dispatch(action)
        },

        emptyCart: bindActionCreators(cartActions.emptyCart, dispatch)
    }
}

// let us create container component
// ReduxCartContainer is the container component, that wraps ReduxCart react component as child
// Container component get the store from Provider using React Context,
// no need to import store by  polluting code base
// Container subsbcribe from  store notification
// Container unsubscribe from store when component is removed
// Container calls mapStateToProps and get the properties that should be passed to component
// Container calls mapDispatchToProps one tme to pass to component
// Container is pure component by default

const ReduxCartContainer = connect(mapStateToProps, mapDispatchToProps) (ReduxCart)

export default ReduxCartContainer;