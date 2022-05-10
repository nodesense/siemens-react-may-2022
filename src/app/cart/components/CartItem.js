// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class CartItem extends PureComponent {
    // the first function in life cycle
    // initialize the state, not doing any BL
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

    // life cycle , get called only once during first time
    // or creation time when the component is mounted on real dom
    // called after first render
    // api calls, timer, subscription, get dom reference
    componentDidMount() {
        console.log("CartItem componentDidMount")
    }

    // life cycle, get called before component get destroyed
    // or unmounted from real dom, clean up resource
    // stop timer, stop subscription, stop api call
    componentWillUnmount() {
        console.log("CartItem componentWillUnmount")
    }

    // called only on update cycle
    // means second render onwards
    // called after render
    // useful to work with html dom after v.dom update on real dom
    // set scroll position etc
    componentDidUpdate() {
        console.log("CartItem componentDidUpdate") 
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