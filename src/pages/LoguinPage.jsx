import { Box, Grid, Link } from '@mui/material';
import React from 'react';
import LoguinForm from '../components/loguin/SignInSide';
import AuthLayout from './AuthLayout';
import RegisterUser from '../components/loguin/RegisterUser';

const LoguinPage = () => {
  return (
    <Box >
      <LoguinForm clickableText="Registrate" path="/register" />
    </Box>

  );
};

export default LoguinPage;