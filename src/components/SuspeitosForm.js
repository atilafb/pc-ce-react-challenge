import * as React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function SuspeitosForm() {

  const [suspeitoCheck, setSuspeitoCheck] = useState("")
  const existeSuspeito = suspeitoCheck === 'suspeitos-sim' 

  const handleChange = (event) => {
    setSuspeitoCheck(event.target.value)
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
            >
              <FormControlLabel value="suspeitos-sim" control={<Radio onClick={handleChange} />} label="Sim" />
              <FormControlLabel value="suspeitos-nao" control={<Radio onClick={handleChange} />} label="Não" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormControlLabel 
            control={
              existeSuspeito ?
              (<TextField required id="nome-cognome" label="Nome(s) / Cognome(s):" fullWidth variant="standard"/>)
              :
              (<TextField disabled id="nome-cognome" label="Nome(s) / Cognome(s):" fullWidth variant="standard" />)
            } />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormControlLabel 
            control={
              existeSuspeito ?
              (<TextField required id="info-relevante" label="Informações relevantes sobre o(s) suspeito(s):" fullWidth variant="standard"/>)
              :
              (<TextField disabled id="info-relevante" label="Informações relevantes sobre o(s) suspeito(s):" fullWidth variant="standard" />)
            } />
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
