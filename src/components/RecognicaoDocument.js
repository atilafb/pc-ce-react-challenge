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

const RecognicaoDocument = () => {

  return(
    <Document>
      <Page style={styles.body}>
        <Text style={[styles.title, styles.bold]}>
          RECOGNIÇÃO VISUOGRÁFICA DE LOCAL DE CRIME nº   /2020
        </Text>
        <Text style={styles.subtitle}>( )Vítima no local ( ) Vítima socorrida - Hospital: ______________</Text>
        <View style={styles.table}>
          <View style={[styles.row, styles.bold, styles.header]}>
            <Text style={styles.subtitle2}>Dados essenciais da ocorrência</Text>
          </View>
          <Text style={styles.text}>Endereço: </Text>
          <Text style={styles.text}>Bairro: </Text>
          <Text style={[styles.text, styles.bold]}>AIS: </Text>
          <Text style={styles.text}>Cidade: </Text>
          <Text style={styles.text}>Data: </Text>
          <Text style={styles.text}>Dia da Semana: </Text>
          <Text style={styles.text}>Hora provável do crime: </Text>
          <Text style={styles.text}>Há câmeras de vigilância no local ou no entorno? </Text>
          <View style={[styles.row, styles.bold, styles.header]}>
            <Text style={styles.subtitle2}>Suspeitos</Text>
          </View>
          <Text style={styles.text}>Há suspeitos? </Text>
          <Text style={styles.text}>Nome(s) / Cognome(s): </Text>
          <Text style={styles.text}>Informações relevantes sobre o(s) suspeito(s): </Text>
          <View style={[styles.row, styles.bold, styles.header]}>
            <Text style={styles.subtitle2}>Dados da Vítima</Text>
          </View>
          <Text style={styles.text}>Nome: </Text>
          <Text style={styles.text}>D.N: </Text>
          <Text style={styles.text}>Filiação </Text>
          <Text style={styles.text}>Nome da Mãe: </Text>
          <Text style={styles.text}>Nome do Pai: </Text>
          <Text style={styles.text}>Sexo: </Text>
          <Text style={styles.text}>Endereço: </Text>
          <Text style={styles.text}>Bairro: </Text>
          <Text style={styles.text}>Cidade: </Text>
          <Text style={styles.text}>Referência: </Text>
          <Text style={styles.text}>Escolaridade: </Text>
        </View>
      </Page>
    </Document>
  );
}

export default RecognicaoDocument;
