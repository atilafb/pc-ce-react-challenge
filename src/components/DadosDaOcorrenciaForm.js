import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DadosDaOcorrenciaForm() {
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [AIS, setAIS] = useState("");
  const [diaDaSemana, setDiaDaSemana] = useState("");

  const handleChange = (event) => {
    setCidade(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados essenciais da ocorrência
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="endereço"
            name="endereço"
            label="Endereço"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="cidade">Cidade</InputLabel>
            <Select
              labelId="cidade"
              id="cidade"
              value={cidade}
              label="Cidade"
              onChange={handleChange}
            >
              <MenuItem value={'Fortaleza'}>Fortaleza</MenuItem>
              <MenuItem value={'Maracanaú'}>Maracanaú</MenuItem>
              <MenuItem value={'Caucaia'}>Caucaia</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="bairro">Bairro</InputLabel>
            <Select
              labelId="bairro"
              id="bairro"
              value={bairro}
              label="Bairro"
              onChange={handleChange}
            >
              <MenuItem value={'Centro'}>Centro</MenuItem>
              <MenuItem value={'Aldeota'}>Aldeota</MenuItem>
              <MenuItem value={'Fátima'}>Fátima</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="AIS">AIS</InputLabel>
            <Select
              labelId="AIS"
              id="AIS"
              value={AIS}
              label="AIS"
              onChange={handleChange}
            >
              <MenuItem value={'AIS 01'}>AIS 01</MenuItem>
              <MenuItem value={'AIS 02'}>AIS 02</MenuItem>
              <MenuItem value={'AIS 03'}>AIS 03</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="diaDaSemana">Dia da Semana</InputLabel>
            <Select
              labelId="diaDaSemana"
              id="diaDaSemana"
              value={diaDaSemana}
              label="diaDaSemana"
              onChange={handleChange}
            >
              <MenuItem value={'segundaFeira'}>Segunda-Feira</MenuItem>
              <MenuItem value={'tercaFeira'}>Terça-Feira</MenuItem>
              <MenuItem value={'quartaFeira'}>Quarta-Feira</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="data"
            name="data"
            label="Data"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="horaDoCrime"
            name="horaDoCrime"
            label="Hora provável do crime"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
