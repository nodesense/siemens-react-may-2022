// components/ReduxProductList.js
import React, {useEffect} from 'react'

const ReduxProductList = ({loading, products, getProducts, addToCart}) => {
    console.log("ProductList render called", loading, products)

    useEffect( () => {
        //getProducts from container, bindActionCreator
        // dispatch thunk function, intercepted by thunk middleware
        console.log("Dispatching getproducts thunk function")
        getProducts() 
    }, []) // componet did mount like

    if (loading) {
        return (<>
            <h2>Product is loading....</h2>
        </>)
    }

    return (
        <div>
                  <h2>Redux Product List</h2>
                  <table>
                      <thead>
                      <tr>
                          <th>Name</th>
                          <th>Year</th>
                          <th>Price</th>
                          <th>+Cart</th>
                      </tr>
                      </thead>
                      <tbody>
                          {
                              products.map (product => (
                                  <tr key={product.id}>
                                      <td>{product.name}</td>
                                      <td>{product.year}</td>
                                      <td>{product.price}</td>
                                      <td>
                                          <button onClick={ () =>  addToCart(product)}>
                                          +Cart
                                          </button> 
                                      </td>
                                  </tr>
                              ))
                          }
                      </tbody>
                  </table>
        </div>
      )

}

export default ReduxProductList;
