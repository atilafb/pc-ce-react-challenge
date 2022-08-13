import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function DadosDaVitimaForm() {
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  
  const handleChange = (event) => {
    setCidade(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados da vítima
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="nome"
            name="nome"
            label="Nome"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormLabel sx={{ mb: 1 }}>Filiação: </FormLabel>
            <TextField
            required
            id="nome-da-mãe"
            name="nome-da-mãe"
            label="Nome da Mãe"
            fullWidth
            variant="standard"
          />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              required
              id="nome-do-pai"
              name="nome-do-pai"
              label="Nome do Pai"
              fullWidth
              variant="standard"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="DN"
            name="DN"
            label="D.N"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
              <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
            </RadioGroup>
          </FormControl>
        </Grid>
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
          <TextField
            required
            id="referência"
            name="referência"
            label="Referência"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Escolaridade</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <RadioGroup 
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                >
                  <FormControlLabel value="analfabeto" control={<Radio />} label="Analfabeto" />
                  <FormControlLabel value="EF-incompleto" control={<Radio />} label="E.F Incompleto" />
                  <FormControlLabel value="EF-completo" control={<Radio />} label="E.F Completo" />
              </RadioGroup>
              <RadioGroup 
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                >
                  <FormControlLabel value="EM-incompleto" control={<Radio />} label="E.M Incompleto" />
                  <FormControlLabel value="EM-completo" control={<Radio />} label="E.M Completo" />
                  <FormControlLabel value="ES-incompleto" control={<Radio />} label="E.S Incompleto" />
              </RadioGroup>
              <RadioGroup 
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                >
                  <FormControlLabel value="ES-completo" control={<Radio />} label="E.S Completo" />
                  <FormControlLabel value="nao-informado" control={<Radio />} label="Não informado" />
                  
              </RadioGroup>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
