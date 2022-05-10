import React, {useState, useEffect} from 'react';

// useState helps to implement simple state in functional component
const Counter = (props ) => {
    console.log("Counter render")
    // destructuing array from position 0, 1
    // useState returns state value and setState function as array
    // 0 is initial state, then state is updated while calling setCount
    const [count, setCount] = useState(0)
   // const [viewsCount, setViewCount] = useState(0) // another state
    
    return (
        <div>
            <h2>Counter</h2>
            <p>counter is {count}</p>
            <button onClick={ () => setCount(count + 1) }>+1</button>
            <button onClick={ () => setCount(count - 1) }>-1</button>
            <button onClick={ () => setCount(0)  }>0</button>
        </div>
    )
}

export default Counter