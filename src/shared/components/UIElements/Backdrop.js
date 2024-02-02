import React from 'react';
import { Backdrop as MuiBackdrop } from '@mui/material';

import './Backdrop.css';

const Backdrop = (props) => {
  return (
    <MuiBackdrop
      open={props.open}
      onClick={props.onClick}
      className="backdrop"
    />
  );
};

export default Backdrop;