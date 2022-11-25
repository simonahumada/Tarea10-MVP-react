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
import NavBar from '../components/nav_bar';
import Listarows from '../data/data_lista';
import { Checkbox } from '@mui/material';




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
const handleSubmit = (event) => {
  alert("Elemento comprado");
};
export const Lista = () => {
  
  return (
    <div className='page'>
      
      <NavBar />
      <h2>Lista</h2>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Producto</StyledTableCell>
            <StyledTableCell align="right">Gramos&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Check</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Listarows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.nombre}
              </StyledTableCell>
              <StyledTableCell align="right">{row.gramos}</StyledTableCell>
                <StyledTableCell align="right">
                    <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }} />
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div align="right" className="button-padding-top" >
        <Button onClick={handleSubmit} color="secondary" size="medium" variant="contained">Confirmar</Button>
    </div>
    
    </div>
  )
}

export default Lista
