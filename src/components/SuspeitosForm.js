import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function SuspeitosForm({ onChange, formValues, errors }) {
  const suspeitoCheck = formValues.suspeitoCheck || ''
  const nomeCognome = formValues.nomeCognome || ''
  const infoRelevante = formValues.infoRelevante || ''

  const existeSuspeito = suspeitoCheck === 'Sim'

  const handleSuspeitoCheck = (event) => {
    onChange('suspeitoCheck', event.target.value)
  }

  const handleNomeCognome = (event) => {
    onChange('nomeCognome', event.target.value)
  }

  const handleInfoRelevante = (event) => {
    onChange('infoRelevante', event.target.value)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Suspeitos
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Há suspeitos?</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={suspeitoCheck}
              onChange={handleSuspeitoCheck}
            >
              <FormControlLabel value="Sim" control={<Radio onClick={handleSuspeitoCheck} />} label="Sim" error={errors?.suspeitoCheck}/>
              <FormControlLabel value="Não" control={<Radio onClick={handleSuspeitoCheck} />} label="Não" error={errors?.suspeitoCheck}/>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl required fullWidth>
            <FormControlLabel 
            control={
              existeSuspeito ?
              (<TextField required id="nome-cognome" label="Nome(s) / Cognome(s):" fullWidth variant="standard" value={nomeCognome} onChange={handleNomeCognome} error={errors?.nomeCognome} />)
              :
              (<TextField disabled id="nome-cognome" label="Nome(s) / Cognome(s):" fullWidth variant="standard" />)
            } />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl required fullWidth>
            <FormControlLabel 
            control={
              existeSuspeito ?
              (<TextField required id="info-relevante" label="Informações relevantes sobre o(s) suspeito(s):" fullWidth variant="standard" value={infoRelevante} onChange={handleInfoRelevante} error={errors?.infoRelevante} />)
              :
              (<TextField disabled id="info-relevante" label="Informações relevantes sobre o(s) suspeito(s):" fullWidth variant="standard" />)
            } />
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
