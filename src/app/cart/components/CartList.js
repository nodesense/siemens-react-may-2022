// CartList.js

import React, {Component, PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 // : PureComponent is derived from Component
 // PureComponent has one function called shouldComponentUpdate implemented
 // shouldComponentUpdate decides whether render() function to be called or not on update cycle
 // if shouldComponentUpdate returns true then render shall be called
 // if shouldComponentUpdate returns false, then render shall not be called
 // shouldComponentUpdate of PureComponent compare all props to the component wiht 
 // previous props, compare all state of this component wiht prev state
 // does shallow comparision means compare two references
// pure component shall compare both objects props and functions props
 class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    
    render() {
        console.log("CartList Render");

        let {items, updateItem, removeItem} = this.props;
        // this.props.name = "welcome" //error, because props are read only


        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }
                    {/* v.dom are deep comparision, expensive process */}
                    {
                       items.map (item => <CartItem key={item.id} 
                                                    item={item} 
                                                    updateItem={updateItem}
                                                    removeItem = {removeItem}
                                                 />)
                    }
                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}

export default CartList;