// components/ReduxCartList.js
import React from 'react'
import ReduxCartItem from '../containers/ReduxCartItem'

// destructuring props
const ReduxCartList = ({items}) => {
  return (
    <div>
        <h2>ReduxCart List</h2>
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
                  
                    {
                       items.map (item => <ReduxCartItem key={item.id} 
                                                    item={item} 
                                                 />)
                    }
                </tbody>
            </table>
            </div>
    </div>
  )
}

export default ReduxCartList   