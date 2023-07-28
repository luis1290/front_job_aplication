
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
import { Collapse, InputLabel, List, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select, TextareaAutosize } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useDispatch, useSelector } from 'react-redux';
import { getCompaniesThunk } from '../store/slices/companies.slice';
import axios from 'axios';
import { useForm } from 'react-hook-form';

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

const CreateAplication = ({ themeGlobal }) => {

  const dispatch = useDispatch();
  const companiesArray = useSelector((state) => state?.companies);
  const id = localStorage.getItem("id")

  const [company, setCompany] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  // const { register, handleSubmit, reset } = useForm();




  useEffect(() => {
    dispatch(getCompaniesThunk())
  }, [company, selectedDate]);


  const handleDateChange = (date) => {

    setSelectedDate(`${date.$D}/${date.$M}/${date.$y}`);
    console.log(selectedDate)
  };



  
  const [formData, setFormData] = useState({});

  

  const [formValues, setFormValues] = useState({
    nameAplication: '',
    description: '',
    fecha: '',
    company: '',
    user_id: id
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
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    //   axios.post('http://localhost:8000/aplicationjob', { name, descriptionApli, dateApli, id, company })
    //     .then((res) => {
    //       console.log(res)
    //       navigate("/")
    //     })
    //     .catch((error) => console.error(error));
    console.log('Valores del formulario:', formValues);
  };

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const submit = data => {
    console.log(data)
  }




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

          <Typography component="h1" variant="h5">
            Crear una aplicación
          </Typography>
          <form onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={11} sm={11} md={11}>
                <TextField
                  autoComplete="given-name"
                  name="nameAplication"
                  value={formValues.nameAplication}
                  required
                  fullWidth
                  id="nameAplication"
                  label="Nombre Aplicación"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={11} sm={11} md={11}>

                <TextField
                  required
                  id="description"
                  name="description"
                  label="Descripción"
                  value={formValues.description}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  autoFocus
                  fullWidth
                />
              </Grid>
              <Grid item xs={11} sm={11} md={11}>

                <TextField
                  id="date"
                  label="fecha"
                  name="fecha"
                  type="date"
                  value={formValues.fecha}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={11} sm={11} md={11}>
                <InputLabel id="demo-simple-select-label">Empresas</InputLabel>
                <Select
                  labelId="company"
                  id="company"
                  name="company"
                  value={formValues.company}
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
              Agregar aplicación
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateAplication;