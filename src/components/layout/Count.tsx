import React, { KeyboardEvent, MouseEvent, ReactNode, useCallback, useMemo, useRef } from 'react'

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
    if(n<2) return n
    return fib(n-1) + fib(n-2)
}

const myNum: number = 21

export const Count = ({children, setCount}: CounterProps) => {

    const inputRef = useRef<HTMLInputElement>(null)

    console.log(inputRef?.current)
    console.log(inputRef?.current?.value)

    const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 1), [])

    const result = useMemo<number>(():number => fib(myNum), [myNum])

  return (
    <>
        <h1>{children}</h1>
        <button onClick={addTwo}>Add</button>
        <h2>{result}</h2>
        <input ref={inputRef} type='text'/>
    </>
  )
}
