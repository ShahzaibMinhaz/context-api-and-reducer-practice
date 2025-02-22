import React, { useReducer } from 'react';
import CounterReducer from './counterReducer';

const Child2 = () => {

    let [state, dispatch] =  useReducer(CounterReducer, 1);

    return(
        <div>
            <h2>This is second child using Counter Reducer</h2>

            <h3>Value of reducer state is: {state}</h3>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
            <button onClick={()=> dispatch('INITIAL')}>Rest Reducer</button>
        </div>
    )
}

export default Child2