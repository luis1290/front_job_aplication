import { Box, Grid, Link } from '@mui/material';
import React from 'react';
import LoguinForm from '../components/loguin/SignInSide';
import AuthLayout from './AuthLayout';
import RegisterUser from '../components/loguin/RegisterUser';

const LoguinPage = () => {
  const handleSubmit = (data) => {
    console.log(data)
  }

  const handleChage = (data) => {
    console.log(data)
  }
  return (
    <Box >
      <LoguinForm clickableText="Registrate" path="/register" onSubmit={handleSubmit} onChange={handleChage} />
    </Box>

  );
};

export default LoguinPage;