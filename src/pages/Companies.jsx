
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import NapBar from '../components/NapBar';
import { useDispatch, useSelector } from 'react-redux';
import { getJobAplicationThunk } from '../store/slices/jobAplication.slice';
import { getCompaniesThunk } from '../store/slices/companies.slice';
import ModalCreatCompany from '../components/ModalCreateCompany';
import axios from 'axios';
import Swal from 'sweetalert2';





const Companies = ({ themeGlobal }) => {

  const dispatch = useDispatch();
  const jobAplication = useSelector((state) => state?.jobAplication);

  const companiesArray = useSelector((state) => state?.companies);



  const id = localStorage.getItem("id")


  const [avatar, setAbatar] = useState('')

  useEffect(() => {
    console.log(themeGlobal)
    setAbatar(jobAplication.url_avatar)
    dispatch(getCompaniesThunk())
    dispatch(getJobAplicationThunk(id));
  }, []);

  const deletCompany = (id) => {

    Swal.fire({
      title: '¿Deseas eliminar este dato?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No Eliminado`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8000/delitecompanies/${id}`)
        .then((res) => {
          dispatch(getCompaniesThunk())
          Swal.fire('Compañia  eliminada con exito')
        })
        .catch((error) => {
          Swal.fire('Error al eliminar compañia', error.response.data.message)
          console.error(error)
        });
        Swal.fire('!Eliminado!', '', 'correctamente')
      } else if (result.isDenied) {
        Swal.fire('Compañia no eliminada', '', 'info')
      }
    })   
  }


  return (
    <ThemeProvider theme={themeGlobal}>
      <CssBaseline />

      <NapBar nameUser={jobAplication.name} urlUser={avatar} />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Empresas
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <ModalCreatCompany themeGlobal={themeGlobal} />
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Array.isArray(companiesArray) ? companiesArray?.map((company) => (
              <Grid item key={company?.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  elevation={4}
                >
                  <CardMedia
                    component="div"
                  >
                    <Typography textAlign="center" key={company?.id} gutterBottom variant="h5" component="h2">
                      {company?.name}
                    </Typography>
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography textAlign="center">
                      Email: {company?.email}
                    </Typography>
                    <Typography textAlign="center">
                      Ubucación: {company?.location}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Editar</Button>
                    <Button onClick={() => deletCompany(company?.id)} size="small">Eliminar</Button>
                  </CardActions>
                </Card>
              </Grid>
            )) : null}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Companies;