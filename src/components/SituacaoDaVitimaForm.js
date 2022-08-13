import * as React from 'react';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField'

export default function SituacaoDaVitimaForm() {
  const [checked, setChecked] = useState("");
  const vitimaSocorrida = checked === 'socorrida'

  const handleChange = (event) => {
    setChecked(event.target.value)
  }
  
  return (
    <>
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="no-local" control={<Radio onClick={handleChange}/>} label="Vítima no local" />
        <FormControlLabel value="socorrida" control={<Radio onClick={handleChange}/>} label="Vítima socorrida" />
        <FormControlLabel 
        control={ 
          vitimaSocorrida ? 
          (<TextField required id="filled-required" label="Hospital" variant="filled"/>) 
          : 
          (<TextField disabled id="filled-required" label="Hospital" variant="filled"/>)
        }
        />
      </RadioGroup>
    </FormControl>
  </>
  );
}
