//ReduxCartItem.js

import React, {useCallback} from 'react'

// item is passed from CartList,
// updateItemInCart, removeItemFromCart passed from ReduxCartItem container component
// ReduxCartList shall pass item to conainer reduxcartitem, the the container
// pass the item to ReduxCartItem component
const ReduxCartItem = ({item, updateItemInCart, removeItemFromCart}) => {
    const incrUpdateItem = useCallback(
        () => {
            updateItemInCart(item.id, item.qty + 1);
        }
      );

      const decrUpdateItem = useCallback(
        () => {
            updateItemInCart(item.id, item.qty - 1);
        }
      );

      
      const removeItem = useCallback(
        () => {
            removeItemFromCart(item.id);
        },
        [],
      );
      
  return (
    <tr>
                <td>{item.name} </td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={incrUpdateItem}>
                        +1
                </button>    

                <button onClick={decrUpdateItem}>
                        -1
                </button>    
                {/* using arrow functin in render will cause multiple instances of same 
                    created      on every render call
                */}
                <button onClick={ removeItem }>
                        X
                </button>
                </td>
            </tr>
  )
}

export default ReduxCartItem