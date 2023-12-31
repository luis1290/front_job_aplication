import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

import ModalCreateInterview from './ModalCreateInterview';


const DetailtAplication = ({ themeGlobal, company, email, location, interviews }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <div>
      <Button onClick={handleOpen}>Detalles</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box elevation={24} className='DetailModal' sx={{ bgcolor: 'background.paper' }}>
          <Grid color="inherit">
            <Typography color="inherit" id="modal-modal-title" variant="h6" component="h2">
              compañia {company}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, color: "inherit" }}>
              Email: {email}
            </Typography>
            <Typography color="inherit" id="modal-modal-description" sx={{ mt: 2 }}>
              Ubicación: {location}
            </Typography>
            {interviews.map((int) => (
              <Box key={int?.id}>
                <Typography key={int?.date_interview} variant='h6' textAlign="center">Entrevista</Typography>
                <Typography key={int?.id} textAlign="center" sx={{ mt: 2, color: "inherit" }}>Fecha Entrevista: {int?.date_interview}</Typography>
                <Typography key={int?.time_interview} textAlign="center" sx={{ mt: 2, color: "inherit" }}>Hora: {int?.time_interview}</Typography>
              </Box>
            ))}
            <Box>
              <ModalCreateInterview themeGlobal={themeGlobal} />
            </Box>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default DetailtAplication;