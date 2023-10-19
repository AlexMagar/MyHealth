import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Tab, Tabs } from '@mui/material';

export const Header = () => {

  const [value, setValue] = useState();

  const handleOnChange = (e) => {
    const {name, value} = e.target;
  }

  return (
    <React.Fragment>
      <AppBar>
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
      </AppBar>
    </React.Fragment>
  )
}


