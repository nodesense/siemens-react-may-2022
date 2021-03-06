// CartSummary.js
import React, {Component} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes


function recalculate(props) {
    let discount = 0;

    if (props.count >= 10) {
        discount = 20;
    } else if (props.count >= 5) {
        discount = 10;
    }

    let grandTotal = props.amount - (props.amount * discount / 100);

    return {
        discount, 
        grandTotal
    }
}

// TODO: PureComponent
 class CartSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    //TODO: componentWillMount
    //TODO: componentWillReceiveProps, recalculate 
 
    //TODO: shouldComponentUpdate

     

    // called whenever parent render called on update cycle
    // called whenver this.setState called on update cycle
    // NOT CALLED when we do this.forceUpdate which trigger render not calling shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState) {
        console.log("CartSummary shouldComponentUpdate")
        console.log("current props ", this.props)
        console.log("current state ", this.state)
        console.log("nextProps ", nextProps)
        console.log("nextState  ", nextState)
        
        return this.props.amount != nextProps.amount || 
               this.props.count != nextProps.count 
        
    }

    static getDerivedStateFromProps(props, state) {
        console.log("CartSummary getDerivedStateFromProps", props, state)

        // return {discount, grandTotal}
        return recalculate(props) // returned state is merged with this.state by react
    }

    
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}

export default CartSummary;