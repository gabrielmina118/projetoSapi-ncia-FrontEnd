import {
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';
import React from 'react';
import { Form, Titulo, Main, SubTitulo, GroupControlLabel } from './style';

const FormStep2 = (props) => {
  return (
    <Main>
      <Titulo>Como você se identifica?</Titulo>
      <SubTitulo>
        Nenhuma dessas perguntas é eliminatória, queremos apenas saber mais
        sobre você e entender quem nosso curso atinge.
      </SubTitulo>
      <Form onSubmit={props.onSubmitForm}>
        <FormLabel component="legend">Identidade de Gênero</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={props.form.gender}
          onChange={props.onChange}
        >
          <GroupControlLabel>
            <FormControlLabel value="homem" control={<Radio style={{ color: 'black' }}/>} label="homem" />
            <FormControlLabel
              value="mulher"
              control={<Radio style={{ color: 'black' }}/>}
              label="mulher"
            />
            <FormControlLabel
              value="naoBinario"
              control={<Radio style={{ color: 'black' }}/>}
              label="NãoBinário"
            />
            <FormControlLabel value="outro" control={<Radio style={{ color: 'black' }}/>} label="Outro" />
          </GroupControlLabel>
        </RadioGroup>

        <FormLabel component="legend">
          Você se considera uma pessoa LGBT?
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="lgbt"
          value={props.form.lgbt}
          onChange={props.onChange}
        >
          <GroupControlLabel>
            <FormControlLabel value="sim" control={<Radio style={{ color: 'black' }}/>} label="Sim" />
            <FormControlLabel value="nao" control={<Radio style={{ color: 'black' }}/>} label="Não" />
            <FormControlLabel
              value="talvez"
              control={<Radio style={{ color: 'black' }}/>}
              label="Talvez"
            />
            <FormControlLabel
              value="prefiroNaoResponder"
              control={<Radio style={{ color: 'black' }}/>}
              label="Prefiro não responder"
            />
          </GroupControlLabel>
        </RadioGroup>

        <FormLabel component="legend">
          Você se considera uma pessoa trans?
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="trans"
          value={props.form.trans}
          onChange={props.onChange}
        >
          <GroupControlLabel>
            <FormControlLabel value="sim" control={<Radio style={{ color: 'black' }}/>} label="Sim" />
            <FormControlLabel value="nao" control={<Radio style={{ color: 'black' }}/>} label="Não" />
            <FormControlLabel
              value="talvez"
              control={<Radio style={{ color: 'black' }}/>}
              label="Talvez"
            />
            <FormControlLabel
              value="prefiroNaoResponder"
              control={<Radio style={{ color: 'black' }}/>}
              label="Prefiro não responder"
            />
          </GroupControlLabel>
        </RadioGroup>

        <FormLabel component="legend">Identificação racial</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="race"
          value={props.form.race}
          onChange={props.onChange}
        >
          <GroupControlLabel>
            <FormControlLabel value="negro" control={<Radio style={{ color: 'black' }}/>} label="Negro" />
            <FormControlLabel
              value="branco"
              control={<Radio style={{ color: 'black' }}/>}
              label="Branco"
            />
            <FormControlLabel value="pardo" control={<Radio style={{ color: 'black' }}/>} label="Pardo" />
            <FormControlLabel
              value="amarelo"
              control={<Radio style={{ color: 'black' }}/>}
              label="Amarelo"
            />
            <FormControlLabel
              value="indigena"
              control={<Radio style={{ color: 'black' }}/>}
              label="Indígena"
            />
            <FormControlLabel value="outro" control={<Radio style={{ color: 'black' }}/>} label="Outro" />
            <FormControlLabel
              value="prefiroNaoResponder"
              control={<Radio style={{ color: 'black' }}/>}
              label="Prefiro não responder"
            />
          </GroupControlLabel>
        </RadioGroup>

        <FormLabel component="legend">
          Você considera seu bairro periférico?
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="suburb"
          value={props.form.suburb}
          onChange={props.onChange}
        >
          <GroupControlLabel>
            <FormControlLabel value="sim" control={<Radio style={{ color: 'black' }}/>} label="Sim" />
            <FormControlLabel value="nao" control={<Radio style={{ color: 'black' }}/>} label="Não" />
            <FormControlLabel
              value="naoSei"
              control={<Radio style={{ color: 'black' }}/>}
              label="Não sei"
            />
            <FormControlLabel
              value="prefiroNaoResponder"
              control={<Radio style={{ color: 'black' }}/>}
              label="Prefiro não responder"
            />
          </GroupControlLabel>
        </RadioGroup>
      </Form>
    </Main>
  );
};

export default FormStep2;
