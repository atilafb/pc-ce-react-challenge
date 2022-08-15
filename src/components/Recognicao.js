import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SituacaoDaVitimaForm from './SituacaoDaVitimaForm';
import DadosDaOcorrenciaForm from './DadosDaOcorrenciaForm';
import SuspeitosForm from './SuspeitosForm';
import DadosDaVitimaForm from './DadosDaVitimaForm';
import Review from './Review';

const steps = ['Situação da Vítima', 'Dados da Ocorrência', 'Suspeitos', 'Dados da Vítima', 'Review your form'];

function getStepContent(step, onChange, formValues, errors) {
  switch (step) {
    case 0:
      return <SituacaoDaVitimaForm onChange={onChange} formValues={formValues} errors={errors} />;
    case 1:
      return <DadosDaOcorrenciaForm onChange={onChange} formValues={formValues} errors={errors} />;
    case 2:
      return <SuspeitosForm />;
    case 3:
      return <DadosDaVitimaForm />
    case 4:
      return <Review />
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

const getIsFormValid = (formValues, errors, step) => {
  if (step === 0) {
    if (errors.localDaVitima || !formValues.localDaVitima) {
      return false
    }
    if (errors.nomeDoHospital || formValues.localDaVitima === 'socorrida' && !formValues.nomeDoHospital) {
      return false
    }
  } else if (step === 1) {
    if (errors.endereco || !formValues.endereco) {
      return false
    }
    if (errors.cidade || !formValues.cidade) {
      return false
    }
    if (errors.bairro || !formValues.bairro) {
      return false
    }
    if (errors.ais || !formValues.ais) {
      return false
    }
    if (errors.diaDaSemana || !formValues.diaDaSemana) {
      return false
    }
    if (errors.data || !formValues.data) {
      return false
    }
    if (errors.horaDoCrime || !formValues.horaDoCrime) {
      return false
    }
    if (errors.cameras || !formValues.cameras) {
      return false
    }
  }
  return true
}

const getFormErrors = (formValues) => {
    const errors = {}
    if (formValues.localDaVitima === '') {
      errors.localDaVitima = 'Local da vitima deve ser preenchido'
    }
    if (formValues.nomeDoHospital === '') {
      errors.nomeDoHospital = 'Nome do hospital deve ser preenchido'
    }
    if (formValues.endereco === '') {
      errors.endereco = 'Endereço deve ser preenchido'
    }
    if (formValues.cidade === '') {
      errors.cidade = 'Cidade deve ser preenchido'
    }
    if (formValues.bairro === '') {
      errors.bairro = 'Bairro deve ser preenchido'
    }
    if (formValues.ais === '') {
      errors.ais = 'AIS deve ser preenchido'
    }
    if (formValues.diaDaSemana === '') {
      errors.diaDaSemana = 'Dia da Semana deve ser preenchido'
    }
    if (formValues.data === '') {
      errors.data = 'Data deve ser preenchido'
    }
    if (formValues.horaDoCrime === '') {
      errors.horaDoCrime = 'Hora do Crime deve ser preenchido'
    }
    if (formValues.cameras === '') {
      errors.cameras = 'Cameras deve ser preenchido'
    }
    return errors
  }

export default function Recognicao() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValues, setFormValues] = React.useState({})

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onFormChange = (fieldName, fieldValue) => {
    setFormValues({...formValues, [fieldName]:fieldValue})
  }

  const errors = getFormErrors(formValues)
  const isValid = getIsFormValid(formValues, errors, activeStep)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Polícia Civil do Ceará
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Recognição
          </Typography>
          <pre>{JSON.stringify(formValues, null, 2)}</pre>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, onFormChange, formValues, errors)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Voltar
                    </Button>
                  )}

                  <Button
                    disabled={!isValid}
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar Formulário' : 'Próximo'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
