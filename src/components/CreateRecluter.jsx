import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getRecluitersThunk } from '../store/slices/recluiter.slice';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCompaniesThunk } from '../store/slices/companies.slice';
import axios from 'axios';
import Swal from 'sweetalert2';




// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const CreateRecluter = ({ themeGlobal, setOpen }) => {
 

  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    name: '',
    linkelin: '',
    email: '',
    compani_id: ''
  });
  const companiesArray = useSelector((state) => state?.companies);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(getCompaniesThunk())
  }, [dispatch]);


  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario parseInt(numeroComoString);
    axios.post('http://localhost:8000/addrecruiter', formValues)
      .then((res) => {
        setOpen()
        dispatch(getRecluitersThunk())
        Swal.fire('Aplicacion agregada con exito')
      })
      .catch((error) => {
        setOpen()
        Swal.fire(`Error al crear el reclutador ${error.response.data.message}`)
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
            Crear Reclutador
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nombre Reclutador"
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
                  label="Email de Reclutador"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="linkelin"
                  required
                  fullWidth
                  id="linkelin"
                  label="linkelin de Reclutador"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={11} sm={11} md={11}>
                <InputLabel id="demo-simple-select-label">Empresas</InputLabel>
                <Select
                  labelId="company"
                  id="compani_id"
                  name="compani_id"
                  value={formValues.compani_id}
                  label="Age"
                  onChange={handleChange}
                >
                  {Array.isArray(companiesArray) ? companiesArray?.map((company) => (
                    <MenuItem id="selectCompany" key={company?.id} value={company?.id}>{company?.name}</MenuItem>
                  )) : null}
                </Select>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Agregar Reclutador
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateRecluter;