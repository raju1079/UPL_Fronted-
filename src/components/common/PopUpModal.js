import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PopUpModal(props) {
  

  return (
    <div>
      <Button onClick={props.handleOpen} className={props.buttonClassName} type={props.buttonType}>{props.buttonname}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Hi!!!
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              You have Subscribed Successfully. Our Team will get back to you shortly... Thank you
            </Typography>
            <Button onClick={props.handleClose} >OK!!</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}