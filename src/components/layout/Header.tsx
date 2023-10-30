import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import { DrawerComp } from './DrawerComp';

// https://www.youtube.com/watch?v=lUkxSnJ7aDw

export const Header = () => {

  const [value, setValue] = useState();
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))

  const handleOnChange = (e) => {
    const {name, value} = e.target;

    setValue({
      ...value,
      [name]: value,
    })
  }

  return (
    <React.Fragment>
      <AppBar sx={{background: "#063970"}}>
        <Toolbar>
          <Typography>LAX</Typography>
            <Tabs textColor='inherit' value={value} onChange={handleOnChange} indicatorColor='secondary'>
              <Tab label="Products"/>
              <Tab label="services"/>
              <Tab label="Contact"/>
              <Tab label="About"/>
            </Tabs>
            <Button sx={{marginLeft: "auto"}} variant='contained'>Login</Button>
            <Button sx={{marginLeft:"10px"}} variant='contained'>SingnUp</Button>
        </Toolbar>
        <DrawerComp />
      </AppBar>
    </React.Fragment>
  )
}


