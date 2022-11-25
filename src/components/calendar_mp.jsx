import * as React from 'react';
import dayjs from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


dayjs.extend(isBetweenPlugin);

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

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.secondary,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(isLastDay && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
}));

export default function Calendar_mp() {
  const [value, setValue] = React.useState(dayjs('2022-11-23'));

  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = value.startOf('week');
    const end = value.endOf('week');

    const dayIsBetween = date.isBetween(start, end, null, '[]');
    const isFirstDay = date.isSame(start, 'day');
    const isLastDay = date.isSame(end, 'day');

  

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
      />
    );
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            color="theme.palette.secondary.dark"
            displayStaticWrapperAs="desktop"
            label="Week picker"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderDay={renderWeekPickerDay}
            renderInput={(params) => <TextField {...params} />}
            inputFormat="'Week of' MMM d"
    
          />
        </LocalizationProvider>
      </Container>
      <div align="right" className="button-padding-top" >
          <Button onClick={handleOpen} color="secondary" size="medium" variant="contained">Agregar comida</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Seleccionar comida
          </Typography>        
          <div>
            <TextField fullWidth id="standard-basic" label="Comida" variant="standard" />
          </div>
          <div>
            <TextField fullWidth id="standard-basic" label="Personas" variant="standard" />
          </div>
          <Grid container spacing={2} className="button-padding-top" >
            <Grid xs={6} display="flex" justifyContent="center" alignItems="center">
            <Button size="medium" variant="outlined" color='error' onClick={handleClose}>Cancelar</Button>
            </Grid> 
            <Grid xs={6} display="flex" justifyContent="center" alignItems="center">
            <Button size="medium" variant="contained" color='secondary'onClick={handleClose} >Aceptar</Button>  
            </Grid>
                       
          </Grid>                    
        </Box>
      </Modal>  
    </React.Fragment>
  

  );
}

