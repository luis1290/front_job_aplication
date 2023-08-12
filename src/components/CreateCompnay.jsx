import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextareaAutosize } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { getJobAplicationThunk } from '../store/slices/jobAplication.slice';
import { getCompaniesThunk } from '../store/slices/companies.slice';
import axios from 'axios';
import getConfig from '../helpers/getConfig';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const CreateCompany = ({ themeGlobal, setOpen }) => {

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    location: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario parseInt(numeroComoString);
    axios.post('http://localhost:8000/companies', formValues)
      .then((res) => {
        console.log(res)
        setOpen()
        // navigate("/")    dispatch(setJobAplication(res.data));
        dispatch(getCompaniesThunk())
        Swal.fire('Aplicacion agregada con exito')
      })
      .catch((error) => {
        Swal.fire('Error al crear la aplicacion')
        console.error(error)
      });
    console.log('Valores del formulario:', formValues);
  };

  return (
    <ThemeProvider theme={themeGlobal}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5">
            Crear Empresa
          </Typography>
          <form onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nombre compañia"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email de compañia"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="location"
                  name="location"
                  label="locacion"
                  value={formValues.description}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  autoFocus
                  fullWidth
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Agregar Compañia
            </Button>

          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateCompany;