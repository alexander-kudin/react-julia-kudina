import React from 'react';

// Material UI
import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box sx={{height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center' }}>
      <CircularProgress color="inherit" sx={{margin: '0 auto'}} />
    </Box> 
  );
}

export default Loader;
