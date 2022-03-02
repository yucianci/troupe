import React from 'react';
import Box from '@mui/material/Box';
import Header from './Header';

const Main: React.FC = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingTop: 7.5,
          paddingLeft: 1,
          paddingRight: 1,
          background: '#f5f6fa',
          height: '100vh',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Main;
