import React from 'react'

import NavBar from '../components/nav_bar'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import Listarows from '../data/data_lista';
import { Checkbox } from '@mui/material';



export const Lista = () => {
  return (
    <div className='page'>
      
      <NavBar />
      <h1 className='page__title'>Lista</h1>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Gramos&nbsp;(g)</TableCell>
            <TableCell align="right">Check</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Listarows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.gramos}</TableCell>
                <TableCell align="right">
                    <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Lista
