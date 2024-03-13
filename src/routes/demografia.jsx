import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function Demografia() {
    const [data, setData] = React.useState([])
    const url_baseline = import.meta.env.VITE_API_URL
    const attData = async () => {
        await axios.get(`${url_baseline}/fichas/dados_seres/`).then((response) => {
            setData(response.data);
    })}
    React.useEffect(() => {
        attData()
    }, [])
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Etnia</TableCell>
            <TableCell align='right'>Percentual</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.etnia}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.etnia != "" ? row.etnia : "humanos"}
              </TableCell>
              <TableCell align='right' >{row.percentual + "%"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}