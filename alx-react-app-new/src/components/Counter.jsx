import React from 'react'
import { useState } from 'react'

function Counter() {
    const [num, setNum] = useState(0);

    return (
        <div>
            <p>{num}</p>
            <button onClick={() => (setNum(num + 1))}>Increment</button>
            <button onClick={() => (setNum(num - 1))}>Decrement</button>
            <button onClick={() => (setNum(0))}>Reset</button>
        </div>
    )
}

export default Counter
