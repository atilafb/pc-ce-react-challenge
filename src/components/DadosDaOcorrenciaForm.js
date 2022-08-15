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

export default function DadosDaOcorrenciaForm({ onChange, formValues, errors }) {
  
  const endereco = formValues.endereco || ''
  const cidade = formValues.cidade || ''
  const bairro = formValues.bairro || ''
  const ais = formValues.ais || ''
  const diaDaSemana = formValues.diaDaSemana || ''
  const data = formValues.data || ''
  const horaDoCrime = formValues.horaDoCrime || ''
  const cameras = formValues.cameras || ''

  const handleEndereco = (event) => {
    onChange('endereco', event.target.value)
  }
  const handleCidade = (event) => {
    onChange('cidade', event.target.value)
  }
  const handleBairro = (event) => {
    onChange('bairro', event.target.value)
  }
  const handleAIS = (event) => {
    onChange('ais', event.target.value)
  }
  const handleDiaDaSemana = (event) => {
    onChange('diaDaSemana', event.target.value)
  }
  const handleData = (event) => {
    onChange('data', event.target.value)
  }
  const handleHoraDoCrime = (event) => {
    onChange('horaDoCrime', event.target.value)
  }
  const handleCameras = (event) => {
    onChange('cameras', event.target.value)
  }

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
            value={endereco}
            onChange={handleEndereco}
            error={errors?.endereco}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl required fullWidth>
            <InputLabel id="cidade">Cidade</InputLabel>
            <Select
              labelId="cidade"
              id="cidade"
              label="Cidade"
              value={cidade}
              onChange={handleCidade}
              error={errors?.cidade}
            >
              <MenuItem value={'Fortaleza'}>Fortaleza</MenuItem>
              <MenuItem value={'Maracanaú'}>Maracanaú</MenuItem>
              <MenuItem value={'Caucaia'}>Caucaia</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl required fullWidth>
            <InputLabel id="bairro">Bairro</InputLabel>
            <Select
              labelId="bairro"
              id="bairro"
              label="Bairro"
              value={bairro}
              onChange={handleBairro}
              error={errors?.bairro}
            >
              <MenuItem value={'Centro'}>Centro</MenuItem>
              <MenuItem value={'Aldeota'}>Aldeota</MenuItem>
              <MenuItem value={'Fátima'}>Fátima</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl required fullWidth>
            <InputLabel id="AIS">AIS</InputLabel>
            <Select
              labelId="AIS"
              id="AIS"
              label="AIS"
              value={ais}
              onChange={handleAIS}
              error={errors?.ais}
            >
              <MenuItem value={'AIS 01'}>AIS 01</MenuItem>
              <MenuItem value={'AIS 02'}>AIS 02</MenuItem>
              <MenuItem value={'AIS 03'}>AIS 03</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl required fullWidth>
            <InputLabel id="dia-da-semana">Dia da Semana</InputLabel>
            <Select
              labelId="dia-da-semana"
              id="dia-da-semana"
              label="diaDaSemana"
              value={diaDaSemana}
              onChange={handleDiaDaSemana}
              error={errors?.diaDaSemana}
            >
              <MenuItem value={'Segunda-Feira'}>Segunda-Feira</MenuItem>
              <MenuItem value={'Terça-Feira'}>Terça-Feira</MenuItem>
              <MenuItem value={'Quarta-Feira'}>Quarta-Feira</MenuItem>
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
            value={data}
            onChange={handleData}
            error={errors?.data}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="hora-do-crime"
            name="hora-do-crime"
            label="Hora provável do crime"
            fullWidth
            variant="standard"
            value={horaDoCrime}
            onChange={handleHoraDoCrime}
            error={errors?.horaDoCrime}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Há cameras de vigilância no local ou entorno?</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={cameras}
              onChange={handleCameras}
              error={errors?.cameras}
            >
              <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
              <FormControlLabel value="Não" control={<Radio />} label="Não" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
