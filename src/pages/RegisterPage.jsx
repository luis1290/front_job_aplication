import { Box } from '@mui/material';
import React from 'react';
import RegisterUser from '../components/loguin/RegisterUser';

const RegisterPage = () => {
  return (
    <Box>
      <RegisterUser clickableText="Inicia seción" path="/loguin" />
    </Box>
  );
};

export default RegisterPage;