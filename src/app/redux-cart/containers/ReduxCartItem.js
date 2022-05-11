import {connect} from 'react-redux'
import ReduxCartItem from '../components/ReduxCartItem'
import * as cartActions from '../state/actions/cart.actions';
import {bindActionCreators} from 'redux';

// no mapStateToProps as this component doesn't need any state
export const mapDispatchToProps = (dispatch, getState) => {
    return {
        removeItemFromCart: bindActionCreators(cartActions.removeItemFromCart, dispatch),
        updateItemInCart: bindActionCreators(cartActions.updateItemInCart, dispatch)
    }
}


export default connect(null, mapDispatchToProps) (ReduxCartItem)