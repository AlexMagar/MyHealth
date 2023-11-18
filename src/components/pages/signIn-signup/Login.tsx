import { Slider } from '@mui/material'
import React from 'react'

const Login = () => {

    const content = (
        <>
        <p>ID: </p>
        <form>
          <input type="text" name="name"/>
          <button>Click me</button>
        </form>
        <Slider defaultValue={30} />
        <Slider defaultValue={30} className='slider'/>
        </>
    )
  return content
}

export default Login