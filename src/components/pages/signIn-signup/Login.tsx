import { Button, TextField } from '@mui/material'


export const Login = () => {

    console.log("This is login page")
    const content = (
        <>
        <p>ID: </p>
        <TextField id='basic' type='text' variant='outlined' placeholder='ID'/>
        <Button>Click Me</Button>
        </>
    )
  return content
}
