import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Ficha from '../components/ficha';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useState} from "react";

export default function Home() {
    const [fichas, setFichas] = useState([]);
    const url_baseline = import.meta.env.VITE_API_URL
    const atualizarVista = async () => {
        console.log(url_baseline)
        await axios.get(`${url_baseline}/fichas/`).then((response) => {
            setFichas(response.data);
    })}
    const criarFicha = async () => {
        await axios.get(`${url_baseline}/fichas/criar/`).then((response) => {
            setFichas([response, ...fichas])
            atualizarVista();
        })
    }
    React.useEffect(() => {
        atualizarVista()
    }, [])

    return (
    <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
            <Box m={4} />
            <Button variant="outlined" onClick={criarFicha}>Criar Nova Ficha</Button>
            <Grid container mt={1} spacing={4}>
                    { fichas.map((ficha) => {
                        return (
                            <Grid item xs={12} md={6} key={ficha.criacao}>
                                <Ficha dados={ ficha } />
                            </Grid>
                        )}) }
            </Grid>
        </Container>
    </React.Fragment>
  );
}