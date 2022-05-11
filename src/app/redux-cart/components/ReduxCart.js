//ReduxCart.js
// rafce
import React from 'react'
import ReduxCartList from '../containers/ReduxCartList'

// no redux here

const ReduxCart = (props) => {
    console.log("ReduxCart render", props)
  const {amount, emptyCart, addItem} = props
  return (
    <div>
        <h2>Redux Cart</h2>
        <span>Amount {amount}</span>
        <button onClick={addItem}>Add Item</button>  
        <button onClick={emptyCart}>Empty</button>

        <ReduxCartList></ReduxCartList>
    </div>
  )
}

ReduxCart.defaultProps = {
    amount: 0
}

export default ReduxCart