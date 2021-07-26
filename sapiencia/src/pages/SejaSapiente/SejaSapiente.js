import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import FormStep1 from '../../components/Formulario/formStep1';
import FormStep2 from '../../components/Formulario/formStep2';
import FormStep3 from '../../components/Formulario/formStep3';
import useForm from '../../hooks/useForm';
import { Main, Fisinh, Buttons } from './style';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import { goToHome } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ['Informações Básicas', 'Como você se identifica', 'Sobre o curso'];
}

const SejaSapiente = () => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    age: '',
    neighbor: '',
    city: '',
    scholarity: '',
    gender: '',
    lgbt: '',
    trans: '',
    race: '',
    suburb: '',
    internet: '',
    access: '',
    receive: '',
    permission: ''
  };

  const [form, onChange, clear] = useForm(initialState);

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <FormStep1
            form={form}
            onChange={onChange}
            onSubmitForm={onSubmitForm}
          />
        );
      case 1:
        return (
          <FormStep2
            form={form}
            onChange={onChange}
            onSubmitForm={onSubmitForm}
          />
        );
      case 2:
        return (
          <FormStep3
            form={form}
            onChange={onChange}
            onSubmitForm={onSubmitForm}
          />
        );
      default:
        return 'Unknown step';
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const history = useHistory();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === 2) {
      // Chamada da api
      console.log(form);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Main>
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption"></Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                <Fisinh>
                  Cadastrado com sucesso ! Dentro de 72 horas entraremos em
                  contato
                </Fisinh>
                // BOTAO PRA HOME
                <button onClick={() => goToHome(history)}>Teste</button>
              </Typography>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <Buttons>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Voltar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Terminado' : 'Próximo'}
                </Button>
              </Buttons>
            </div>
          )}
          
        </div>
      </div>
    </Main>
  );
};

export default SejaSapiente;
