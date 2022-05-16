// containers/ReduxProductList.js
import {connect} from 'react-redux'
import ReduxProductList from '../components/ReduxProductList'
import * as cartActions from '../state/actions/cart.actions';
import {bindActionCreators} from 'redux';

export const mapStateToProps = (state) => {
    return {
        loading: state.productState.loading, 
        products: state.productState.products, 
        // example to pass cart data into products
        count: state.cart.count
    }
}

export const mapDispatchToProps = (dispatch, getState) => {
    return {
        addToCart: product => {
            dispatch(cartActions.addItemToCart( product.id,   product.name, product.price))
        },

        // thunk , getProducts returns a function
        getProducts: bindActionCreators(cartActions.getProducts, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ReduxProductList);