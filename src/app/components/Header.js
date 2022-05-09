import React from 'react'; // needed if we use jsx in code

// es5 style functional component 

function Header(props) {
    console.log("Header render", props)
    // destructring in ES6 
    const {title} = props 
    // const title = props.title
    return (
        <div>
            <h2>{title}</h2>
            <hr />
        </div>
    )
}

export default Header;