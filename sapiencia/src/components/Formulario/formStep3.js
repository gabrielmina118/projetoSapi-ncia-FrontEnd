import React from 'react';
import {
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';
import { Form, Titulo, Main, GroupControlLabel } from './style';

const FormStep3 = (props) => {
  return (
    <Main>
      <Titulo>Sobre o curso</Titulo>
      <Form onSubmit={props.onSubmitForm}>
        <FormLabel component="legend">
          Você participaria de todos os dias do curso?
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={props.form.gender}
          onChange={props.onChange}
        >
          <GroupControlLabel>
            <FormControlLabel value="sim" control={<Radio style={{ color: 'black' }}/>} label="Sim" />
            <FormControlLabel value="nao" control={<Radio style={{ color: 'black' }}/>} label="Não" />
          </GroupControlLabel>
        </RadioGroup>

        <FormLabel component="legend">
          Você possui internet para participar dos cursos de maneira online?
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="internet"
          value={props.form.internet}
          onChange={props.onChange}
        >
          <GroupControlLabel>
            <FormControlLabel value="sim" control={<Radio style={{ color: 'black' }}/>} label="Sim" />
            <FormControlLabel value="nao" control={<Radio style={{ color: 'black' }}/>} label="Não" />
            <FormControlLabel
              value="naoSei"
              control={<Radio style={{ color: 'black' }}/>}
              label="Não Sei"
            />
          </GroupControlLabel>
        </RadioGroup>

        <FormLabel component="legend">Como você acessaria o curso?</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="access"
          value={props.form.access}
          onChange={props.onChange}
        >
          <GroupControlLabel>
            <FormControlLabel
              value="celular"
              control={<Radio style={{ color: 'black' }}/>}
              label="Celular"
            />
            <FormControlLabel
              value="computador"
              control={<Radio style={{ color: 'black' }}/>}
              label="Computador"
            />
            <FormControlLabel
              value="tablet"
              control={<Radio style={{ color: 'black' }}/>}
              label="Tablet"
            />
            <FormControlLabel
              value="outro"
              control={<Radio style={{ color: 'black' }}/>}
              label="Outro Dispositivo"
            />
          </GroupControlLabel>
        </RadioGroup>

        <FormLabel component="legend">
          Aceita receber material de divulgação do Sapiência por e-mail e
          celular?
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="receive"
          value={props.form.receive}
          onChange={props.onChange}
        >
          <GroupControlLabel>
            <FormControlLabel value="1" control={<Radio style={{ color: 'black' }}/>} label="Sim" />
            <FormControlLabel value="0" control={<Radio style={{ color: 'black' }}/>} label="Não" />
          </GroupControlLabel>
        </RadioGroup>

        <FormLabel component="legend">
          Aceito que as aulas sejam gravadas e que o material seja utilizado
          para divulgação do projeto.
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="permission"
          value={props.form.permission}
          onChange={props.onChange}
        >
          <GroupControlLabel>
            <FormControlLabel value="1" control={<Radio style={{ color: 'black' }}/>} label="Sim" />
            <FormControlLabel value="0" control={<Radio style={{ color: 'black' }}/>} label="Não" />
          </GroupControlLabel>
        </RadioGroup>
      </Form>
    </Main>
  );
};

export default FormStep3;
