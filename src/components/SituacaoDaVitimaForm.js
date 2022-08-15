import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField'

export default function SituacaoDaVitimaForm({ onChange, formValues, errors }) {

  const localDaVitima = formValues.localDaVitima || ''
  const nomeDoHospital = formValues.nomeDoHospital || ''

  const vitimaFoiSocorrida = localDaVitima === 'Socorrida'

  const handleLocalDaVitima = (event) => {
    onChange('localDaVitima', event.target.value)
  }

  const handleNomeDoHospital = (event) => {
    onChange('nomeDoHospital', event.target.value)
  }
  
  return (
    <>
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={localDaVitima}
        onChange={handleLocalDaVitima}
      >
        <FormControlLabel value='No local' control={<Radio onClick={handleLocalDaVitima}/>} label="Vítima no local" error={errors?.localDaVitima}/>
        <FormControlLabel value='Socorrida' control={<Radio onClick={handleLocalDaVitima}/>} label="Vítima socorrida" error={errors?.localDaVitima}/>
        <FormControlLabel 
        sx={{ ml: 1 }}
        control={ 
          vitimaFoiSocorrida ? 
          (<TextField required id="filled-required" label="Hospital" variant="filled" size='small' value={nomeDoHospital} onChange={handleNomeDoHospital} error={errors?.nomeDoHospital}/>) 
          : 
          (<TextField disabled id="filled-required" label="Hospital" variant="filled" size='small' />)
        }
        />
      </RadioGroup>
    </FormControl>
  </>
  );
}
