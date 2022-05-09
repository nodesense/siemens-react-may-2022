// class component
// React is defualt export from react module
// for default export, we don't use curly brace
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './cart/components/Cart';



class App extends React.Component {
    constructor(props) {
        super(props)
        console.log('App created')
    }

    // keyword
    render() {
        // JSX - JavaScript + XML
        // babel - transpiler, used in react-scripts/cli
        // babel plugins react , it converts xml to javascript
        // while compiling the app
        // when the code goes to browser, it will be javascript, not jsx
        // create virtual dom
        // and return virtual dom
        console.log("App render")
        return (
            <div>
                {/* comment in jsx */}
                {/* app is parent, header and footer are children */}
                {/* pass data  from parent to child usign props */}
                <Header title="Product app" />

                <Cart />
                
                <Footer title="Product App" 
                        year={2022} 
                        stores = { ["Chennai", "Mysore", "BLR"] }
                        weekend = { true }
                        >
                    {/* known as content children */ }
                    {/* content children not displayed by default 
                    
                       instead passed to child component as props.children
                    */}
                    <p>Customer care: +91 911111111</p>
                </Footer>
            </div>
        )
    }
}

export default App;