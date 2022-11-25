import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import NavBar from '../components/nav_bar'

function createData(name, amount ) {
  return { name, amount};
}

const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
];

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

export const Inventory = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='page'>
      <h1 className='page__title'>Frontend Sample App</h1>
      <NavBar />
      <h2>Inventario de Ingredientes</h2>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ingrediente</TableCell>
            <TableCell align="right">Gramos/mililitros(g/ml)</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div align="right" className="button-padding-top" >
      <Button onClick={handleOpen} size="medium" variant="contained" color='secondary'>Añadir</Button>
    </div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ingresar ingrediente a agregar al inventario
          </Typography>
          <div>
            <TextField id="standard-basic" label="Ingrediente" variant="standard" />
          </div>          
          <div>
            <TextField id="standard-basic" label="Cantidad" variant="standard" />
          </div>
          <Grid container spacing={2} className="button-padding-top" >
            <Grid xs={6} display="flex" justifyContent="center" alignItems="center">
            <Button size="medium" variant="contained" color='secondary' >Aceptar</Button>  
            </Grid>
            <Grid xs={6} display="flex" justifyContent="center" alignItems="center">
            <Button size="medium" variant="outlined" color='error' onClick={handleClose}>Salir</Button>
            </Grid>            
          </Grid>                    
        </Box>
      </Modal>    
    </div>
  )
}

export default Inventory
