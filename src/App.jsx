import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Demografia from "./routes/demografia";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { orange } from '@mui/material/colors';
import { Box, Button, Container } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: orange[800],
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
      <header>
          <Link to={'/'}><Button variant="text" color="secondary">Ferramenta de criação de fichas</Button></Link>
          <Link to={'/demografia'}><Button variant="text" color="secondary">Ver dados de distribuição</Button></Link>
      </header>
        <main>
        <Container maxWidth="sm">
            <Box m={4} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/demografia" exact element={<Demografia />} />
          </Routes>
          </Container>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
