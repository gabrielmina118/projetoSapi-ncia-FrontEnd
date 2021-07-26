import {
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';
import React from 'react';
import { Form, Main } from './style';

const FormStep1 = (props) => {
  return (
    <Main>
      <Form onSubmit={props.onSubmitForm}>
        <TextField
          autoFocus
          name={'name'}
          value={props.form.name}
          onChange={props.onChange}
          size="small"
          required
          fullWidth
          borderColor="green"
          label="Nome"
          style={{ margin: 8 }}
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />
        <TextField
          autoFocus
          name={'email'}
          value={props.form.email}
          onChange={props.onChange}
          type="email"
          size="small"
          required
          fullWidth
          borderColor="green"
          label="E-mail"
          style={{ margin: 8 }}
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />
        <TextField
          autoFocus
          name={'phone'}
          value={props.form.phone}
          onChange={props.onChange}
          size="small"
          required
          fullWidth
          borderColor="green"
          label="Celular (com DDD)"
          style={{ margin: 8 }}
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />
        <TextField
          autoFocus
          name={'age'}
          value={props.form.age}
          onChange={props.onChange}
          type="number"
          size="small"
          required
          fullWidth
          borderColor="green"
          label="Idade"
          style={{ margin: 8 }}
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />
        <TextField
          autoFocus
          name={'neighbor'}
          value={props.form.neighbor}
          onChange={props.onChange}
          size="small"
          required
          fullWidth
          borderColor="green"
          label="Bairro"
          style={{ margin: 8 }}
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />
        <TextField
          autoFocus
          name={'city'}
          value={props.form.city}
          onChange={props.onChange}
          size="small"
          required
          fullWidth
          borderColor="green"
          label="Cidade"
          style={{ margin: 8 }}
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />

        <h2>Escolaridade</h2>
        <RadioGroup
          aria-label="gender"
          name="scholarity"
          value={props.form.scholarity}
          onChange={props.onChange}
        >
          <FormControlLabel
            value="EFI"
            control={<Radio />}
            label="Ensino Fundamental incompleto"
          />
          <FormControlLabel
            value="EFC"
            control={<Radio />}
            label="Ensino fundamental completo"
          />
          <FormControlLabel
            value="EMI"
            control={<Radio />}
            label="Ensino médio incompleto"
          />
          <FormControlLabel
            value="EMC"
            control={<Radio />}
            label="Ensino médio completo"
          />
          <FormControlLabel
            value="ESI"
            control={<Radio />}
            label="Ensino superior incompleto"
          />
          <FormControlLabel
            value="ESC"
            control={<Radio />}
            label="Ensino superior completo"
          />
        </RadioGroup>
      </Form>
    </Main>
  );
};

export default FormStep1;
