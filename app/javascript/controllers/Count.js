import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
  return (
    <>
        <h1>This is the count component</h1>
        <p>{count} counts</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>

    </>
    
  )
}

export default Count                                                   





















