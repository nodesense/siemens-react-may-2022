//ProductList.js
import React, { Component } from 'react'

import axios from 'axios';

export class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        // async
        axios.get("http://localhost:7070/api/products")
             .then (response  => {
                    console.log("Products data ", response.data)
                    this.setState({
                        products: response.data
                    })
             })
    }

    addToCart = (product) => {
        console.log("product to add", product)
    }

  render() {
    return (
      <div>
                <h2>Product List</h2>
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
                            this.state.products.map (product => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.year}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button onClick={ () => this.addToCart(product)}>
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
}

export default ProductList