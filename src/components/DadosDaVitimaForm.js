import * as React from 'react';
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

export default function DadosDaVitimaForm({ onChange, formValues, errors }) {

  const nome = formValues.nome || ''
  const nomeDaMae = formValues.nomeDaMae || ''
  const nomeDoPai = formValues.nomeDoPai || ''
  const dn = formValues.dn || ''
  const sexo = formValues.sexo || ''
  const enderecoDaVitima = formValues.enderecoDaVitima || ''
  const cidadeDaVitima = formValues.cidadeDaVitima || ''
  const bairroDaVitima = formValues.bairroDaVitima || ''
  const referencia = formValues.referencia || ''
  const escolaridade = formValues.escolaridade || ''

  const handleNome = (event) => {
    onChange('nome', event.target.value)
  }
  const handleNomeDaMae = (event) => {
    onChange('nomeDaMae', event.target.value)
  }
  const handleNomeDoPai = (event) => {
    onChange('nomeDoPai', event.target.value)
  }
  const handleDN = (event) => {
    onChange('dn', event.target.value)
  }
  const handleSexo = (event) => {
    onChange('sexo', event.target.value)
  }
  const handleEnderecoDaVitima = (event) => {
    onChange('enderecoDaVitima', event.target.value)
  }
  const handleCidadeDaVitima = (event) => {
    onChange('cidadeDaVitima', event.target.value)
  }
  const handleBairroDaVitima = (event) => {
    onChange('bairroDaVitima', event.target.value)
  }
  const handleReferencia = (event) => {
    onChange('referencia', event.target.value)
  }
  const handleEscolaridade = (event) => {
    onChange('escolaridade', event.target.value)
  }

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
            value={nome}
            onChange={handleNome}
            error={errors?.nome}
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
            value={nomeDaMae}
            onChange={handleNomeDaMae}
            error={errors?.nomeDaMae}
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
              value={nomeDoPai}
              onChange={handleNomeDoPai}
              error={errors?.nomeDoPai}
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
            value={dn}
            onChange={handleDN}
            error={errors?.dn}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl required>
            <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={sexo}
              onChange={handleSexo}
              error={errors?.sexo}
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
            value={enderecoDaVitima}
            onChange={handleEnderecoDaVitima}
            error={errors?.enderecoDaVitima}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="cidade">Cidade</InputLabel>
            <Select
              labelId="cidade"
              id="cidade"
              value={cidadeDaVitima}
              onChange={handleCidadeDaVitima}
              error={errors?.cidadeDaVitima}
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
              value={bairroDaVitima}
              onChange={handleBairroDaVitima}
              error={errors?.bairroDaVitima}
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
            value={referencia}
            onChange={handleReferencia}
            error={errors?.referencia}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Escolaridade</FormLabel>
            <RadioGroup
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={escolaridade}
              onChange={handleEscolaridade}
              error={errors?.escolaridade}
            >
              <FormControlLabel value="Analfabeto" control={<Radio />} label="Analfabeto" />
              <FormControlLabel value="EF-incompleto" control={<Radio />} label="E.F Incompleto" />
              <FormControlLabel value="EF-completo" control={<Radio />} label="E.F Completo" />
              <FormControlLabel value="EM-incompleto" control={<Radio />} label="E.M Incompleto" />
              <FormControlLabel value="EM-completo" control={<Radio />} label="E.M Completo" />
              <FormControlLabel value="ES-incompleto" control={<Radio />} label="E.S Incompleto" />
              <FormControlLabel value="ES-completo" control={<Radio />} label="E.S Completo" />
              <FormControlLabel value="Não informado" control={<Radio />} label="Não informado" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
