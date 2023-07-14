
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
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { useEffect, useMemo, useState } from 'react';
import ModalCreatAplication from '../components/ModalCreatAplication';
import NapBar from '../components/NapBar';
import { useDispatch, useSelector } from 'react-redux';
import { getJobAplicationThunk } from '../store/slices/jobAplication.slice';
import DetailtAplication from '../components/DetailtAplication';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

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


const Home = ({ themeGlobal }) => {
  const dispatch = useDispatch();
  const jobAplication = useSelector((state) => state.jobAplication);
  const [open, setOpen] = useState(false);


  const id = localStorage.getItem("id")
  const [avatar, setAbatar] = useState('')
  const [name, setName] = useState('')


  const handleOpen = () => {
    setOpen(!open);
  };



  useEffect(() => {
    setAbatar(jobAplication?.url_avatar)
    setName(jobAplication?.name)
    dispatch(getJobAplicationThunk(id));
  }, []);

  return (
    <ThemeProvider theme={themeGlobal}>
      <CssBaseline />


      <NapBar nameUser={jobAplication?.name} urlUser={avatar} themeGlobal={themeGlobal} />

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
              Aplicaciones de trabajo
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <ModalCreatAplication themeGlobal={themeGlobal} />
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {jobAplication?.aplicatio_jobs?.map((apl) => (
              <Grid item key={apl?.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  elevation={4}
                >
                  <CardMedia
                    component="div"
                  >
                    <Typography textAlign="center" key={apl?.id} gutterBottom variant="h5" component="h2">
                      {apl?.name}
                    </Typography>
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography textAlign="center">
                      {apl.description}
                    </Typography>
                  </CardContent>
                  <CardActions >
                    {/* <Button size="small">Detalles</Button> */}
                    <DetailtAplication    key={apl?.company?.id} company={apl?.company?.name} email={apl?.company?.email} location={apl?.company?.location} />
                    <Button size="small">Editar</Button>
                    <Button size="small">Eliminar</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">

        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default Home;