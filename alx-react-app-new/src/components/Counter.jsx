import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => (setCount(count + 1))}>Increment</button>
            <button onClick={() => (setCount(count - 1))} style={{ marginInline: 10 }}>Decrement</button>
            <button onClick={() => (setCount(0))}>Reset</button>
        </div>
    )
}

export default Counter
