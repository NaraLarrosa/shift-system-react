import React from 'react';
import { CircularProgress } from '@mui/material';

import './LoadingSpinner.css';

const LoadingSpinner = (props) => {
  return (
    <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;