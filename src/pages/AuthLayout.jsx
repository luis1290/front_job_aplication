import { Box, Typography } from '@mui/material';
import React from 'react';

const AuthLayout = ({ Children, message }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      {(
        <Typography >
          {message}
        </Typography>
      )}
      <Box sx={{ width: "100%" }}>
        {Children}
      </Box>

    </Box>
  );
};

export default AuthLayout;