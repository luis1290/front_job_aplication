import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';
import ModalCreatAplication from '../components/ModalCreatAplication';
import AdbIcon from '@mui/icons-material/Adb';
import NapBar from '../components/NapBar';
import { useDispatch, useSelector } from 'react-redux';
import { getJobAplicationThunk } from '../store/slices/jobAplication.slice';
import { Image } from '@mui/icons-material';
import DetailtAplication from '../components/DetailtAplication';

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

const Companies = () => {

  const dispatch = useDispatch();
  const jobAplication = useSelector((state) => state.jobAplication);
  const [open, setOpen] = useState(false);
  const aplication = useSelector((state) => state?.jobAplication?.aplicatio_jobs);

  const id = localStorage.getItem("id")

  const [apli, setApli] = useState([]);
  const [avatar, setAbatar] = useState('')

  useEffect(() => {
    setApli(jobAplication?.aplicatio_jobs)
    setAbatar(jobAplication.url_avatar)
    dispatch(getJobAplicationThunk(id));
  }, [apli]);
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
              Empresas
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <ModalCreatAplication />
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((cards) => (
              <Grid item key={cards} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  elevation={4}
                >
                  <CardMedia
                    component="div"
                  >
                    <Typography textAlign="center" key={cards} gutterBottom variant="h5" component="h2">
                      {cards}
                    </Typography>
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography textAlign="center">
                      {cards}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">Detalles</Button> */}

                    <Button size="small">Editar</Button>
                    <Button size="small">Eliminar</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Companies;