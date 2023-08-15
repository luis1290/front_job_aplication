import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CreateAplication from './CreateAplication';

const ModalCreatAplication = ({ themeGlobal }) => {


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
    <div className='modalCreateAplication'>
      <Button onClick={handleOpen} variant="contained">Agregar aplicación</Button>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modalCreate' sx={{ bgcolor: 'background.paper' }}  >
          <CreateAplication themeGlobal={themeGlobal} setOpen={setOpen} />
          <Button onClick={handleOpen}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            cerrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalCreatAplication;