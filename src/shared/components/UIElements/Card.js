import React from 'react';

import { Card, CardMedia } from '@material-ui/core';

export default function ShiftCard() { 
  return (
    <card>
      <CardMedia 
        component= "img" 
        image="https://via.placeholder.com/1000x200"
        heigth= "200"
        alt="Shift system"
      />
    </card>
    // <div className={`card ${props.className}`} style={props.style}>
    //   {props.children}
    // </div>
  );
};