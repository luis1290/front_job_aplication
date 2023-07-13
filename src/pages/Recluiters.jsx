
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
import { getRecluitersThunk } from '../store/slices/recluiter.slice';
import ModalCreateRecluter from '../components/ModalCreateRecluter';
import DetailRecluter from '../components/DetailRecluter';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Recluiters = () => {

  const dispatch = useDispatch();
  const jobAplication = useSelector((state) => state?.jobAplication);

  const recluiters = useSelector((state) => state?.recluiters);



  const id = localStorage.getItem("id")


  const [avatar, setAbatar] = useState('')

  useEffect(() => {
    setAbatar(jobAplication.url_avatar)
    dispatch(getRecluitersThunk())
    dispatch(getJobAplicationThunk(id));
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
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
              Reclutadores
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <ModalCreateRecluter />
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Array.isArray(recluiters) ? recluiters?.map((reclu) => (
              <Grid item key={reclu?.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  elevation={4}
                >
                  <CardMedia
                    component="div"
                  >
                    <Typography textAlign="center" key={reclu?.id} gutterBottom variant="h5" component="h2">
                      {reclu?.name}
                    </Typography>
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography textAlign="center">
                      Email: {reclu?.email}
                    </Typography>
                    <Typography textAlign="center">
                      Linkelin: {reclu?.linkelin}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">Detalles</Button> */}
                    <DetailRecluter key={reclu?.id} company={reclu?.company} name={reclu?.name} />
                    <Button size="small">Editar</Button>
                    <Button size="small">Eliminar</Button>
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

export default Recluiters;