import { Box, Grid, Link } from '@mui/material';
import React from 'react';
import LoguinForm from '../components/loguin/SignInSide';
import AuthLayout from './AuthLayout';
import RegisterUser from '../components/loguin/RegisterUser';
import axios from 'axios';
import { useNavigate } from 'react-router';

const LoguinPage = () => {

  const navigate = useNavigate()

  const handleSubmit = (data) => {
    axios.post('http://localhost:8000/users/login', data)
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("id", res.data.id)
        navigate("/")
      })
      .catch((error) => console.error(error));
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