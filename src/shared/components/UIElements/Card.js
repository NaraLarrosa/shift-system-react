import React from 'react';

import { Card, CardContent, Typography } from '@mui/material';

const CustomCard = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;