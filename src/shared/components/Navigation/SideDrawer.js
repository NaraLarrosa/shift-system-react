import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

import './SideDrawer.css';

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <Drawer
        open={props.show}
        onClose={props.onClick}
        anchor="left"
        className="side-drawer"
      >
        <List>
          <ListItem button onClick={props.onClick}>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem button onClick={props.onClick}>
            <ListItemText primary="Item 2" />
          </ListItem>
        </List>
      </Drawer>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;