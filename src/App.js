import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';


import Home from './components/Home/Home'

import Pacientes from './components/containers/Pacientes/Pacientes'
import Odontologos from './components/containers/Odontologos/Odontologos'
import Turnos from './components/containers/Turnos/Turnos'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#8e99f3',
      main: '#5c6bc0',
      dark: '#26418f',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#62efff',
      main: '#00bcd4',
      dark: '#008ba3',
      contrastText: '#e2f1fc',
    },
    text:{
      primary: '#f2f2f2',
      secondary: '#f2f2f2',
      disabled: '#50455c'
    }
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route Route path="/" element={<Home />} />
          <Route Route path="/pacientes" element={<Pacientes />} />
          <Route Route path="/turnos" element={<Turnos />} />
          <Route Route path="/odontologos" element={<Odontologos />} />
        </Routes>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
