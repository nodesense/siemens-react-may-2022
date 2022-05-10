// FuncCartSummary.js
import React, {useState, useEffect, useMemo} from "react";
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
     
const FuncCartSummary = (props) => {
    console.log("FuncCartSummary Render");
    const [discount, setDiscount] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)

    // useEffect - similar to life cycle methods, useful to work with ref etc
    // use to make api call
    // called after first render /componentDidMount
    // called after every render, update cycle /componentDidUpdate
    useEffect(() => {
        console.log("useEffect document title")
        document.title = `Grant Total is  ${grandTotal}`;
      });

      //useEffect with only componentDidMount like scenario, must be called only once
      // use the empty depedent variable array
      // called after on initial render like creation state
      // not called during update cycle because we use empty arg list []
    // [] array represent depedent variable, means useeffect wil eb called only any changed in value
    // [] is empty, useEffect is called only once
    
    useEffect( () => {
        console.log("Func Cart Summary useEffect like did mount")
    }, [])

    // useEffect based on dependent variables, this may be called 
    // on creation and update cycle only if the values are differnt than prev one
    useEffect( () => {
        const {amount, count} = props
        console.log("**FuncCartSummary useEffect", amount, count)
        const {discount, grandTotal} = recalculate(props)
        setDiscount(discount)
        setGrandTotal(grandTotal)
    }, [props.amount, props.count])
    
    return (
        <div> 
        <h2>Func Cart Summary</h2>
        <p> Amount : {props.amount} </p>
        <p> Count : {props.count} </p>

        <p> Discount:   {discount}%</p>
        <p> Grand Total: {grandTotal} </p>
        </div>
    )
}
          
export default FuncCartSummary;