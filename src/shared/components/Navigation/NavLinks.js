import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const NavLinks = (props) => {
  return (
    <List component="nav">
      <ListItem 
        button component={Link} to="/users" exact>
        <ListItemText primary="USERS" />
      </ListItem>
      <ListItem 
        button component={Link} to="/specialties" exact>
        <ListItemText primary="SPECIALTIES" />
      </ListItem>
      <ListItem 
        button component={Link} to="/doctors" exact>
        <ListItemText primary="DOCTORS" />
      </ListItem>
      <ListItem 
        button component={Link} to="/shifts" exact>
        <ListItemText primary="SHIFTS" />
      </ListItem>
    </List>
  );
};

export default NavLinks;