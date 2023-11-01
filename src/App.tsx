
import './App.css'
import { Counter } from './components/layout/Counter.tsx'
import { Footer } from './components/layout/Footer.tsx'
import Header from './components/layout/Header.tsx'
import { Section } from './components/layout/Section.tsx'

function App() {

  return (
    <>
    <Header title={'Hello Heading'}/>
    <h1>My Health</h1>
    <hr/>
    <Section title='Hello Title'>
      This is my Section
    </Section>
    <hr/>
    <Counter/>
    <Footer/>
    </>
  )
}

export default App
