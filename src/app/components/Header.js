import React, {useContext} from 'react'; // needed if we use jsx in code
import ThemeContext from '../contexts/ThemeContext';
import {Link, NavLink} from 'react-router-dom';

// es5 style functional component 

function Header(props) {
    console.log("Header render", props)
    // destructring in ES6 
    const {title} = props 
    // const title = props.title
    //style={ {background: theme} }
    const theme = useContext(ThemeContext)
    return (
        <div>
            <h2 >{title}</h2>
            <NavLink className="button" to="/" activeClassName='success' exact>
                Home
            </NavLink>

            <NavLink className="button" to="/products" activeClassName='success'>
                Products
            </NavLink>
            <NavLink className="button" to="/func-products" activeClassName='success'>
            Func ProductList
            </NavLink>

            


            <NavLink className="button" to="/redux-products" activeClassName='success'>
                Redux Products
            </NavLink>


            <NavLink className="button" to="/redux-cart" activeClassName='success'>
                Redux Cart
            </NavLink>

            
            <NavLink className="button" to="/cart" activeClassName='success'>
                Cart
            </NavLink>

            <NavLink className="button" to="/checkout/apply0" activeClassName='success'>
                Checkout
            </NavLink>

            
            <NavLink className="button" to="/about" activeClassName='success'>
                About
            </NavLink>
            
            <hr />
        </div>
    )
}

export default Header;