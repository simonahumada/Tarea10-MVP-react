import * as React from 'react';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell , { tableCellClasses }from '@mui/material/TableCell';
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
import Listarows from '../data/data_inventory';


function createData(name, amount ) {
  return { name, amount};
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
  const [values, setValues] = React.useState({
    nombre: '',
    gramos: '',    
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    alert("Elemento Agregado");
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='page'>
      <NavBar />
      <h2>Inventario de Ingredientes</h2>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Ingrediente</StyledTableCell>
            <StyledTableCell align="right">Gramos/mililitros(g/ml)</StyledTableCell> 
          </TableRow>
          </TableHead>
        <TableBody>
          {Listarows.map((row) => (
            <StyledTableRow
              key={row.nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.nombre}
              </StyledTableCell>
              <StyledTableCell align="right">{row.gramos}</StyledTableCell>              
            </StyledTableRow>
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
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ingresar ingrediente a agregar al inventario
          </Typography>
          <div>
            <TextField fullWidth id="standard-basic" label="Ingrediente" variant="standard" value={values.nombre} onChange={handleChange('nombre')}/>
          </div>          
          <div>
            <TextField fullWidth id="standard-basic" label="Cantidad" variant="standard" value={values.gramos} onChange={handleChange('gramos')}/>
          </div>
          <Grid container spacing={2} className="button-padding-top" >
          <Grid xs={6} display="flex" justifyContent="center" alignItems="center">
            <Button size="medium" variant="outlined" color='error' onClick={handleClose}>Cancelar</Button>
            </Grid> 
            <Grid xs={6} display="flex" justifyContent="center" alignItems="center">
            <Button type='submit' size="medium" variant="contained" color='secondary' >Aceptar</Button>  
            </Grid>                       
          </Grid>                    
        </Box>
      </Modal>    
    </div>
  )
}

export default Inventory
