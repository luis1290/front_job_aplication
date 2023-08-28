import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompaniesThunk } from '../store/slices/companies.slice';
import axios from 'axios';
import getConfig from '../helpers/getConfig';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { getJobAplicationThunk } from '../store/slices/jobAplication.slice';
import { TimePicker } from '@mui/x-date-pickers';



const CreateInterview = ({ themeGlobal }) => {

  const [formValues, setFormValues] = useState({
    date_interview: '',
    time_interview: ''
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
    console.log('Valores del formulario:', formValues);
  };



  return (
    <ThemeProvider theme={themeGlobal}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Agregar Fecha de entrevista
          </Typography>
          <form onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  id="date_interview"
                  label="fecha"
                  name="date_interview"
                  type="date"
                  value={formValues.date_interview}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  id="time_interview"
                  label="Hora"
                  name="time_interview"
                  type="time"
                  value={formValues.time_interview}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Agregar Entrevista
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateInterview;