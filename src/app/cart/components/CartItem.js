// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class CartItem extends PureComponent {
    constructor(props) {
        super(props);
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty

    // addQty and lessQty created only once per instance
    addQty = (e) => {
       // this.props.updateItem(this.props.item.id, this.props.item.qty  + 1)
       const {updateItem, item} = this.props;
       updateItem(item.id, item.qty + 1)
    }

    lessQty = (e) => {
        const {updateItem, item} = this.props;
        updateItem(item.id, item.qty - 1)
    }
   
    render() {
        let {item, updateItem, removeItem} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name} </td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={this.addQty}>
                        +1
                </button>    

                <button onClick={this.lessQty}>
                        -1
                </button>    
                {/* using arrow functin in render will cause multiple instances of same 
                    created      on every render call
                */}
                <button onClick={ () => removeItem(item.id) }>
                        X
                </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}

export default CartItem;