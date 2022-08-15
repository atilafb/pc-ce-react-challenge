import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function RevisaoFormulario({ formValues }) {

  const localDaVitima = formValues.localDaVitima || ''
  const nomeDoHospital = formValues.nomeDoHospital || ''

  const endereco = formValues.endereco || ''
  const cidade = formValues.cidade || ''
  const bairro = formValues.bairro || ''
  const ais = formValues.ais || ''
  const diaDaSemana = formValues.diaDaSemana || ''
  const data = formValues.data || ''
  const horaDoCrime = formValues.horaDoCrime || ''
  const cameras = formValues.cameras || ''

  const suspeitoCheck = formValues.suspeitoCheck || ''
  const nomeCognome = formValues.nomeCognome || ''
  const infoRelevante = formValues.infoRelevante || ''

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

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Revisão de Formulário
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Situação da Vítima
          </Typography>
          <Typography gutterBottom>Local da Vítima: {localDaVitima}</Typography>
          <Typography gutterBottom>Nome do Hospital: {nomeDoHospital}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Dados da Ocorrência
          </Typography>
          <Typography gutterBottom>Endereço: {endereco}</Typography>
          <Typography gutterBottom>Cidade: {cidade}</Typography>
          <Typography gutterBottom>Bairro: {bairro}</Typography>
          <Typography gutterBottom>AIS: {ais}</Typography>
          <Typography gutterBottom>Dia da Semana: {diaDaSemana}</Typography>
          <Typography gutterBottom>Data: {data}</Typography>
          <Typography gutterBottom>Hora do Crime: {horaDoCrime}</Typography>
          <Typography gutterBottom>Há cameras de vigilância no local ou no entorno?: {cameras}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Suspeitos
          </Typography>
          <Typography gutterBottom>Há Suspeitos?: {suspeitoCheck}</Typography>
          <Typography gutterBottom>Nome(s) / Cognome(s): {nomeCognome}</Typography>
          <Typography gutterBottom>Informações relevantes sobre o(s) suspeito(s): {infoRelevante}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Dados da Vítima
          </Typography>
          <Typography gutterBottom>Nome: {nome}</Typography>
          <Typography gutterBottom>Filiação:</Typography>
          <Typography gutterBottom>Mãe: {nomeDaMae}</Typography>
          <Typography gutterBottom>Pai: {nomeDoPai}</Typography>
          <Typography gutterBottom>D.N: {dn}</Typography>
          <Typography gutterBottom>Sexo: {sexo}</Typography>
          <Typography gutterBottom>Endereço: {enderecoDaVitima}</Typography>
          <Typography gutterBottom>Cidade: {cidadeDaVitima}</Typography>
          <Typography gutterBottom>Bairro: {bairroDaVitima}</Typography>
          <Typography gutterBottom>Referência: {referencia}</Typography>
          <Typography gutterBottom>Escolaridade: {escolaridade}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
