import React, { useContext } from 'react';
import counterContext from './Countercontext';

const Child = () => {
    
    let counterValue = useContext(counterContext)
    
    return (
        <div>
            <h2>This is first child using Counter Context</h2>
            <h4>Counter value is: {counterValue[0]}</h4>

            <button onClick={()=> {counterValue[1](++counterValue[0])}}>
                Increment Context
            </button>
            <button onClick={()=> counterValue[1](counterValue[0]=1)}>Reset Context</button>
        </div>
    )
}

export default Child;