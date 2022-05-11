import {connect} from 'react-redux'
import ReduxCartList from '../components/ReduxCartList'
import * as cartActions from '../state/actions/cart.actions';
import {bindActionCreators} from 'redux';

export const mapStateToProps = (state) => {
    console.log("**ReduxCartList mapStateToProps", state)
    return {
        // only data to be passed here, not functions
        items: state.cart.items,

    }
}
  
export default  connect(mapStateToProps, null) (ReduxCartList)
 