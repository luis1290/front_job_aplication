import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Card, IconButton, InputAdornment, Paper, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const RegisterUser = ({ clickableText, path }) => {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [formData, setFormData] = useState({ name, email, password, confirmPassword })
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)




  const validateImput = () => {
    setNameError(!formData.name)
    setEmailError(!formData.email)
    setPasswordError(!formData.password)
    setConfirmPasswordError(!formData.confirmPassword)
  }

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

  useEffect(() => {
    if (emailError && email) {
      setEmailError(false)
    }
    if (passwordError && password) {
      setPasswordError(false)
    }
    if (nameError && name) {
      setNameError(false)
    }

    if (confirmPasswordError && confirmPassword) {
      setConfirmPasswordError(false)
    }
    setFormData({ name, email, password, confirmPassword })
  }, [name, email, password, confirmPassword])



  // TODO remove, this demo shouldn't need to reset the theme.

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(../public/Portada-tipos-de-entrevistas.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registrarce
            </Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="nombre de  usuario"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={(e) => { setName(e.target.value) }}
                error={nameError}
                helperText={nameError ? "El email es obligatoria" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email "
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => { setEmail(e.target.value) }}
                error={emailError}
                helperText={emailError ? "El email es obligatoria" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                onChange={(e) => { setPassword(e.target.value) }}
                error={passwordError}
                helperText={passwordError ? "La contraseña es obligatoria" : ""}
                InputProps={
                  {
                    endAdornment: <IconButton onClick={() => { setShowPassword(!showPassword) }}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  }
                }
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="confirPassword"
                label="Confirmar Contraseña"
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirPassword"
                autoComplete="current-password"
                onChange={(e) => { setConfirmPassword(e.target.value) }}
                error={confirmPasswordError}
                helperText={confirmPasswordError ? "La verificacion contraseña  es obligatoria" : ""}
                InputProps={
                  {
                    endAdornment: <IconButton onClick={() => { setShowConfirmPassword(!showConfirmPassword) }}>
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  }
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  validateImput();
                  console.log(formData)
                }}
              >
                Registrarce
              </Button>
              <Grid item>
                <Link to={path} variant="body2">
                  {clickableText}
                </Link>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default RegisterUser;