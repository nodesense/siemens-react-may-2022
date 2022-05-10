// class component
// React is defualt export from react module
// for default export, we don't use curly brace
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './cart/components/Cart';
import Counter from './components/Counter';
import Checkout from './cart/components/Checkout';
import ThemeContext from './contexts/ThemeContext';
import {BrowserRouter as Router, 
        Route,
        Redirect,
        Switch    
} from 'react-router-dom';



class App extends React.Component {
    constructor(props) {
        super(props)
        console.log('App created')
        this.state = {
            theme: 'pink'
        }
    }

    pinkTheme = () => {
        this.setState({theme: 'pink'})
    }
    
    greenTheme = () => {
        this.setState({theme: 'lightgreen'})
    }

    blueTheme = () => {
        this.setState({theme: 'lightblue'})
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
            <Router>
            <div>
                <button onClick={this.blueTheme}>Blue</button>
                <button onClick={this.greenTheme}>Green</button>
                <button onClick={this.pinkTheme}>Pink</button>
                {/* any ThemeConsumer inside provide will receive pink value */}
                <ThemeContext.Provider value={this.state.theme}>
                {/* comment in jsx */}
                {/* app is parent, header and footer are children */}
                {/* pass data  from parent to child usign props */}
                <Header title="Product app" />

                {/* Switch picks first match instead of rendering all matches */}
                <Switch>
                <Route path="/cart">
                    <Cart />
                </Route>    
                <Route path="/checkout/:coupon" 
                        render = { (props) => <Checkout {...props} /> } >
                        
                </Route>        
                <Route path="/counter">
                    <Counter />
                </Route>      
                <Route path="/old-about">
                    <Redirect to="/about" />
                </Route>
                <Route path="/about">
                    <p>About page here</p>
                </Route> 
                <Route path="/" exact>
                    <p>Home page</p>
                </Route>
                <Route path='*'>
                  <p>  Page you are looking for is not found </p>
                </Route>
                </Switch>


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
                </ThemeContext.Provider>
            </div>
            </Router>
        )
    }
}

export default App;