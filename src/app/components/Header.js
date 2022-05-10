import React, {useContext} from 'react'; // needed if we use jsx in code
import ThemeContext from '../contexts/ThemeContext';

// es5 style functional component 

function Header(props) {
    console.log("Header render", props)
    // destructring in ES6 
    const {title} = props 
    // const title = props.title
    const theme = useContext(ThemeContext)
    return (
        <div>
            <h2 style={ {background: theme} }>{title}</h2>
            <hr />
        </div>
    )
}

export default Header;