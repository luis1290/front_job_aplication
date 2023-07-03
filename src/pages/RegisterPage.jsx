import { Box } from '@mui/material';
import React from 'react';
import RegisterUser from '../components/loguin/RegisterUser';

const RegisterPage = () => {

  const handleSubmit = (data) => {
    console.log(data)
  }

  const handleChage = (data) => {
    console.log(data)
  }
  return (
    <Box>
      <RegisterUser clickableText="Inicia seción" path="/loguin" onSubmit={handleSubmit} onChange={handleChage} />
    </Box>
  );
};

export default RegisterPage;