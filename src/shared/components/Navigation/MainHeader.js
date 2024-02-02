import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const MainHeader = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          {props.children}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;