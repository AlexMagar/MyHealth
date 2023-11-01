import { ReactNode, useState } from 'react'

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>
  children: ReactNode
}

export const Counter = ({children, setCount}: CounterProps) => {

  const handleOnClick = () => {
    setCount( count => count +4 )
  }
  return (
    <>
        <p>This is {children}</p>
        <button onClick={handleOnClick}>+</button>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </>
  )
}
