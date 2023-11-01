import { useState } from 'react'
 
export const Counter = () => {

    const [count, setCount] = useState<number>(1)

    const handleOnClick = () => {
      setCount( count +1 ) 
    }

  return (
    <>
        <p>Your total count is {count}</p>
        <button onClick={handleOnClick}>+</button>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </>
  )
}
