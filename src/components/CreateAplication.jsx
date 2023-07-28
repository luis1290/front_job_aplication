
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



  useEffect(() => {
    dispatch(getCompaniesThunk())
  }, [company, selectedDate]);


  const handleDateChange = (date) => {

    setSelectedDate(`${date.$D}/${date.$M}/${date.$y}`);
    console.log(selectedDate)
  };



  const handleChange = (event) => {
    setCompany(event.target.value);
  };

  const [formData, setFormData] = useState({});

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log('datos pusos sin el estado', {
  //     name: data.get('nameAplication'),
  //     description: data.get('description'),
  //     date_share: selectedDate,
  //     uer_id: parseInt(id, 10),
  //     company_id: company
  //   });

  //   setFormData({
  //     name: data.get('nameAplication'),
  //     description: data.get('description'),
  //     date_share: selectedDate,
  //     uer_id: parseInt(id, 10),
  //     company_id: company
  //   })

  //   console.log(formData)
  // };


  const handleSubmit = (event) => {

    event.preventDefault();
     const data = new FormData(event.currentTarget);
    const { nameAplication, description, date } = event.target;
    const name = nameAplication.value
    const descriptionApli = description.value
    const dateApli = date.value


    setFormData({
      name: data.get('nameAplication'),
      description: data.get('description'),
      date_share: data.get('date'),
      uer_id: parseInt(id, 10),
      company_id: company
    })
    console.log(formData)


    axios.post('http://localhost:8000/aplicationjob', { name, descriptionApli, dateApli, id, company })
      .then((res) => {
        console.log(res)
        navigate("/")
      })
      .catch((error) => console.error(error));
  }

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
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

          <Typography component="h1" variant="h5">
            Crear una aplicación
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={11} sm={11} md={11}>
                <TextField
                  autoComplete="given-name"
                  name="nameAplication"
                  required
                  fullWidth
                  id="nameAplication"
                  label="Nombre Aplicación"
                  autoFocus
                />
              </Grid>
              <Grid item xs={11} sm={11} md={11}>

                <TextField
                  required
                  id="description"
                  name="description"
                  label="Descripción"
                  multiline
                  rows={4}
                  autoFocus
                  fullWidth
                />
              </Grid>
              <Grid item xs={11} sm={11} md={11}>
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Fecha"
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider> */}
                <TextField
                  id="date"
                  label="fecha"
                  name="fecha"
                  type="date"
                />
              </Grid>

              <Grid item xs={11} sm={11} md={11}>
                <InputLabel id="demo-simple-select-label">Empresas</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={company}
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateAplication;