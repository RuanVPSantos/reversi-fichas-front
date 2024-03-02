import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function Ficha(props) {
    
    return ( 
        <>
            <Paper elevation={3} sx={{padding:2}}>
                <Typography variant='p' gutterBottom>Raça: {props.dados.raca}</Typography><br />
                <Typography variant='p' gutterBottom>Etnia: {props.dados.etnia}</Typography><br />
                <Typography variant='p' gutterBottom>Ser: {props.dados.ser}</Typography><br />
                <Typography variant='p' gutterBottom>Classe Social: {props.dados.classe_social}</Typography><br />
                <Typography variant='p' gutterBottom>Criado em: {new Date(props.dados.criacao).toLocaleString()}</Typography><br />


            </Paper>   
        </>
     );
}

export default Ficha;


