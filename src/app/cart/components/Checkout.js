import React, { Component, createRef } from 'react'

// Ref is to get DOM reference in react
// dom events/functions can be applied only on real dom, not on virtual dom
// select text in control, set focus on control
export class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: 'Your Name',
            city: ''
        }

        // firstNameRef.current is actual reference of dom input
        // firstNAmeRef can be used after first mount, componentDidMount
        this.firstNameRef = createRef()
    }

    handleChange = (e) => {
        //target is real dom ref either input or select
        const {name, value} = e.target
        console.log("datachange ", name, value)

        this.setState({
            // [name] ensure to use as variable, name shall be firstName or city
            [name]: value
        })
    }

    gotoCart = () => {
        this.props.history.push("/cart")
    }

    componentDidMount() {
        // routeded params like match, match.params.coupon
        // history for navigation
        console.log ("Checkout render ", this.props)
        const coupon = this.props.match.params.coupon
        console.log("Coupon", coupon)
        this.firstNameRef.current.focus()
        this.firstNameRef.current.select()
    }

  render() {
    return (
      <div>
          <h2>Checkout</h2>
          <form>
              First Name <input name="firstName" 
                                type="text" 
                                value={this.state.firstName} 
                                onChange = {this.handleChange}
                                ref={this.firstNameRef}
                                />

             City <select name="city" value={this.state.city}
                            onChange = {this.handleChange}
             >
                 <option value='BLR'>BLR</option>
                 <option value='Chennai'>Chennai</option>
                 <option value='Pune'>Pune</option>
             </select>
          </form>

          <button onClick={this.gotoCart}>Cart</button>
      </div>
    )
  }
}

export default Checkout