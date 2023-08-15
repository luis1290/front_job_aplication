import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { getCompaniesThunk } from '../store/slices/companies.slice';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';


const CreateCompany = ({ themeGlobal, setOpen }) => {



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
        setOpen()
        dispatch(getCompaniesThunk())
        Swal.fire('Empresa agregada con exito')
      })
      .catch((error) => {
        setOpen()
        Swal.fire(`Error al crear la empresa ${ error.response.data.message}`)
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