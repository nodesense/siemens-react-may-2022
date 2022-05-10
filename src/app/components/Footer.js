import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../contexts/ThemeContext';
import {withRouter} from 'react-router-dom';

// props is contract between parent and child component
// add few constraints to validate props
//   data type check, required check

// destructuring in function parameter
const Footer = ( { year, title, stores, weekend, children, history, match } ) => {
    console.log("Footer render")
    console.log("Footer render route ", match, history)
    // create and return virtual dom
    return (
        <div>
            <hr />
            <p>Copyrights {year}, {title}</p>
            {/* JSX only support expresison that returns value ,not statements */}
            {
                stores && stores.map ((store) => (<span key={store}>{store} </span>))
            }

            { 
                weekend? <p>Weekends are open </p> :
                          <p>Weekend holiday</p>  
            }

            {/* children coming from parent content area */}
            {children}

            <ThemeContext.Consumer>
                { value => (
                    <div style= { {background: value} }>
                        I am lovely {value} color
                    </div>
                )}
            </ThemeContext.Consumer>

        </div>
    )
}

// keywords
Footer.propTypes = {
    year: PropTypes.number.isRequired,
    weekend: PropTypes.bool.isRequired,
    stores: PropTypes.array
}

// keyword, default value if the props not passed from parent
Footer.defaultProps = {
   year: 2020,
   // weekend: false, 
    stores : []
}

// create higher order component that wrap footer comp
// React router shall pass history, match params to props
export default withRouter(Footer);