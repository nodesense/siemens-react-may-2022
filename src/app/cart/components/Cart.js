// Cart.js
import React from 'react';
import CartList from './CartList';
import CartSummary from './CartSummary';


function  recalculate(items) {
    let totalItems = 0, 
        amount = 0;

    for (let item of items) {
        amount += item.price * item.qty;
        totalItems += item.qty;
    }

    return {
        amount,
        totalItems
    }
}


class Cart extends React.Component {
    constructor(props) {
        super(props)
        // keyword,
        // only for class component
        this.state = {
            items: [], 
            amount: 0,
            totalItems: 0, 
            flag: true // dummy
        }
    }

    addItem = () => {
        const id = Math.ceil (Math.random() * 1000000)
        const item = {
            id, // id: id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: Math.ceil(Math.random() * 10),
        }

        // to modify state, always use setState function
        // set state with object
        // setState is async function, means, state changes is not reflected immediately
        // setState is linked with event life cycle
        // setState shall trigger render to be called async way

        const items = [...this.state.items, item] // ... spread
        console.log("Before ", this.state)

        const {amount, totalItems} = recalculate(items)
        
        // other properties are retained as is
        this.setState({
            items, // items: items
            amount, totalItems
        })

        console.log("After ", this.state)

    }

    empty = (e) => {
        console.log("Event ", e)

        const items = [] 
        const {amount, totalItems} = recalculate(items)

        this.setState ({
            items,
            amount, totalItems
        })
    }

    divClick = () => {
        console.log("State at divClick", this.state)
    }

    mouseEnter = () => {
        console.log("State at mouseEnter", this.state)
    }

    // child to parent communication
    // callback: we will pass removeItem function to CartItem component via CartList as props
    // .. then CartItem shall callback removeItem function
    removeItem = (id) => {
        console.log("removeItem called", id)
        // return all items as new array ref, exclude the one
        const items = this.state.items.filter (item => item.id !== id)
        const {amount, totalItems} = recalculate(items)

        this.setState ({
            items,
            amount, totalItems
        })
    }

    // pass func reference to child component as callback
    updateItem = (id, qty ) => {
        console.log("updateItem called ", id, qty)
        // two level of immutablity, list itself immutable, object item inside list tobe immutable
        const items = this.state.items.map (item => item.id === id ? {...item, qty} : item)
        const {amount, totalItems} = recalculate(items)

        this.setState({items, amount, totalItems})
    }

    bulkAdd = () => {
        const newItems = []
        for (let i = 0; i < 1000; i++) {
            const id = Math.ceil (Math.random() * 1000000)
            const item = {
                id, // id: id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: Math.ceil(Math.random() * 10),
            }
            newItems.push(item)
        }

        const items = [...this.state.items, ...newItems]
        this.setState({items})
    }

    dummy = () => {
        // trigger render function
        this.setState ({flag: true})
    }

    render() {
        console.log("Cart render", this.state)
        return (
            <div>
                <h2>Cart</h2>
                {/* Event bubble */}
                <div onClick={this.divClick} onMouseEnter={this.mouseEnter}>
                    <button onClick={this.addItem}>Add Item</button>
                </div>
                <button onClick={this.empty}>Empty</button>
                <button onClick={this.bulkAdd}>Bulk Add</button>
                <button onClick={this.dummy}>Dummy</button>

                <CartList items={this.state.items} 
                          updateItem = {this.updateItem}
                          removeItem = {this.removeItem}  
                >
                </CartList>

                <CartSummary amount={this.state.amount}
                             count={this.state.totalItems}>
                </CartSummary>
            </div>
        )
    }
}

export default Cart;