import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <Box sx={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center' }}>
      <CircularProgress color="inherit" sx={{margin: '0 auto'}} />
    </Box> 
  );
}

export default Loader;
