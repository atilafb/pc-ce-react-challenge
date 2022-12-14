import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 14,
  },
  subtitle2: {
    fontSize: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 10,
    textAlign: 'justify',
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold'
  },
  table: {
    width: '100%',
    border: '1px solid',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid',
    paddingTop: 8,
    paddingBottom: 8,
  },
  header: {
    backgroundColor: '#D1D5DB'
  },
});

const RecognicaoDocument = ({ formValues }) => {
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

  return(
    <Document>
      <Page style={styles.body}>
        <Text style={[styles.title, styles.bold]}>
          RECOGNI????O VISUOGR??FICA DE LOCAL DE CRIME n??   /2020
        </Text>
        <Text style={styles.subtitle}>(X)V??tima {localDaVitima} - Hospital: {nomeDoHospital}</Text>
        <View style={styles.table}>
          <View style={[styles.row, styles.bold, styles.header]}>
            <Text style={styles.subtitle2}>Dados essenciais da ocorr??ncia</Text>
          </View>
          <Text style={styles.text}>Endere??o: {endereco}</Text>
          <Text style={styles.text}>Bairro: {bairro}</Text>
          <Text style={[styles.text, styles.bold]}>AIS: {ais}</Text>
          <Text style={styles.text}>Cidade: {cidade}</Text>
          <Text style={styles.text}>Data: {data}</Text>
          <Text style={styles.text}>Dia da Semana: {diaDaSemana}</Text>
          <Text style={styles.text}>Hora prov??vel do crime: {horaDoCrime}</Text>
          <Text style={styles.text}>H?? c??meras de vigil??ncia no local ou no entorno? {cameras}</Text>
          <View style={[styles.row, styles.bold, styles.header]}>
            <Text style={styles.subtitle2}>Suspeitos</Text>
          </View>
          <Text style={styles.text}>H?? suspeitos? {suspeitoCheck}</Text>
          <Text style={styles.text}>Nome(s) / Cognome(s): {nomeCognome}</Text>
          <Text style={styles.text}>Informa????es relevantes sobre o(s) suspeito(s): {infoRelevante}</Text>
          <View style={[styles.row, styles.bold, styles.header]}>
            <Text style={styles.subtitle2}>Dados da V??tima</Text>
          </View>
          <Text style={styles.text}>Nome: {nome}</Text>
          <Text style={styles.text}>D.N: {dn}</Text>
          <Text style={styles.text}>Filia????o</Text>
          <Text style={styles.text}>Nome da M??e: {nomeDaMae}</Text>
          <Text style={styles.text}>Nome do Pai: {nomeDoPai}</Text>
          <Text style={styles.text}>Sexo: {sexo}</Text>
          <Text style={styles.text}>Endere??o: {enderecoDaVitima}</Text>
          <Text style={styles.text}>Bairro: {bairroDaVitima}</Text>
          <Text style={styles.text}>Cidade: {cidadeDaVitima}</Text>
          <Text style={styles.text}>Refer??ncia: {referencia}</Text>
          <Text style={styles.text}>Escolaridade: {escolaridade}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default RecognicaoDocument;
