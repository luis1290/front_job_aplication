import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Card, IconButton, InputAdornment, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const RegisterForm = () => {

  const [showPassword, setShowPassword] = useState(false)
  return (
    <Paper elevation={3} >
      <Card  className="cardRegistrer">
        <Box  className="BoxRegistrer">
          <Stack  className="StackRegistrer">
            <Typography variant="h4">Registro</Typography>
            <TextField color="primary" label="username" ></TextField>
            <TextField color="primary" label="email" ></TextField>

            <TextField color="primary" label="password" type={showPassword ? 'text' : 'password'}

              InputProps={
                {
                  endAdornment: <IconButton onClick={() => { setShowPassword(!showPassword) }}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
              }
            ></TextField>
            <Button variant="contained" color="primary">Registrar</Button>
          </Stack>
        </Box>
      </Card>
    </Paper>

  );
};

export default RegisterForm;