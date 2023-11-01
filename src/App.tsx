
import { useState } from 'react'
import './App.css'
import { Counter } from './components/layout/Counter.tsx'
import { Footer } from './components/layout/Footer.tsx'
import Header from './components/layout/Header.tsx'
import { Section } from './components/layout/Section.tsx'
import { List } from './components/layout/List.tsx'

function App() {

  const [count, setCount] = useState<number>(1)

  return (
    <>
    <Header title={'Hello Heading'}/>
    <h1>My Health</h1>
    <hr/>
    <Section title='Hello Title'>
      This is my Section
    </Section>
    <hr/>
    <Counter setCount={setCount}>Count is {count}</Counter>
    <hr/>
    <List 
      items={["string", 1223, "Boolean"]} 
      render={(item:string | number) => <span className='gold'>{item}</span>} 
    />
    <hr/>
    <Footer/>
    </>
  )
}

export default App
