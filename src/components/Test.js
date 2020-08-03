import React, { useState } from 'react'

function Test() {
    const [count, setCount] = useState(0);

    function handleCount() {
        const user = {
            id: 42,
            is_verified: true
        }
        const {id, is_verified} = user;
        console.log(id);

        setCount(count + 1)
    }

    return (
        <div>
            <p>You clicked {count}</p>
            <button onClick={handleCount}>
                click me
            </button>

        </div>
    )
}

export default Test
