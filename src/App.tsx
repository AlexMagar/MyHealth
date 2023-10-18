import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

function App() {

  return (
    <>
    <Header/>
    <h1>My Health</h1>
    <hr/>
    <Footer/>
    </>
  )
}

export default App
