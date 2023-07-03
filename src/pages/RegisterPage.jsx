import { Box } from '@mui/material';
import React from 'react';
import RegisterUser from '../components/loguin/RegisterUser';
import axios from 'axios';

const RegisterPage = () => {

  const handleSubmit = (data) => {
    const { email, name, password } = data
    axios.post('http://localhost:8000/users', { name, email, password })
      .then((res) => { console.log(res) })
      .catch((error) => console.error(error));
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