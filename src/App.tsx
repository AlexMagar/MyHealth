
import { useEffect, useState } from 'react'
import './App.css'
import { Cart } from './components/Cart'
import { ProductList } from './components/ProductList'
import Header from './components/layout/Header'
import { Footer } from './components/layout/Footer'

interface User {
  id: number,
  username: string,
}

function App() {

  // const [count, setCount] = useState<number>(1)
  // const [users, setUsers] = useState<User[] | null>(null)

  // useEffect(() => {
  //   console.log('mounting')
  //   console.log('Users: ', users)

  //   return () => console.log('unmounting')
  // }, [users])

  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent = viewCart ? <Cart /> : <ProductList />

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart = {setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

  return content
{/*     
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
    <Count setCount={setCount}>Count {count}</Count>
    <hr/>
    <Footer/> */}

}

export default App
