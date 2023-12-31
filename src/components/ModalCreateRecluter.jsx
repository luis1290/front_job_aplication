import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CreateRecluter from './CreateRecluter';
import Grid from '@mui/material/Grid';

const ModalCreateRecluter = ({ themeGlobal }) => {


  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box xs={12} sm={6} md={4} className='modalCreateAplication'>
      <Button onClick={handleOpen} variant="contained">Agregar Reclutador</Button>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modalCreate' sx={{ bgcolor: 'background.paper' }} >
          <Grid >
            <CreateRecluter themeGlobal={themeGlobal} setOpen={setOpen} />
            <Button onClick={handleOpen}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              cerrar
            </Button>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalCreateRecluter;