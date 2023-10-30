import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'

export const DrawerComp = () => {
    const [openDrawer, setopenDrawer] = useState(false)
  return (
    <React.Fragment>
        <Drawer open={openDrawer} onClose={()=>setopenDrawer(false)}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>Hello</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton onClick={() => setopenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>

    </React.Fragment>
  )
}
