import { Button, FormLabel, TextField, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import React from 'react';
import useForm from '../../hooks/useForm';
import { Form, Titulo, Main, SubTitulo, GroupControlLabel } from './style';

const FormStep2 = () => {

    const initialState = {
        "name": "",
        "email": "",
        "phone": "",
        "age": "",
        "neighbor": "",
        "city": "",
        "scholarity": "",
        "gender": "",
        "lgbt": "",
        "trans": "",
        "race": "",
        "suburb": "",
        "internet": "",
        "access": "",
        "receive": "",
        "permission": ""
    }

    const [form, onChange, clear] = useForm(initialState)


    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log(form)
    }

    return (
        <Main>
            <Titulo>Como você se identifica?</Titulo>
            <SubTitulo>Nenhuma dessas perguntas é eliminatória, queremos apenas saber mais sobre você e entender quem nosso curso atinge.</SubTitulo>
            <Form onSubmit={onSubmitForm}>

                <FormLabel component="legend">Identidade de Gênero</FormLabel>
                <RadioGroup aria-label="gender" name="gender" value={form.gender} onChange={onChange}>
                    <GroupControlLabel>
                        <FormControlLabel value="homem" control={<Radio />} label="homem" />
                        <FormControlLabel value="mulher" control={<Radio />} label="mulher" />
                        <FormControlLabel value="naoBinario" control={<Radio />} label="NãoBinário" />
                        <FormControlLabel value="outro" control={<Radio />} label="Outro" />
                    </GroupControlLabel>
                </RadioGroup>

                <FormLabel component="legend">Você se considera uma pessoa LGBT?</FormLabel>
                <RadioGroup aria-label="gender" name="lgbt" value={form.lgbt} onChange={onChange}>
                    <GroupControlLabel>
                        <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="nao" control={<Radio />} label="Não" />
                        <FormControlLabel value="talvez" control={<Radio />} label="Talvez" />
                        <FormControlLabel value="prefiroNaoResponder" control={<Radio />} label="Prefiro não responder" />
                    </GroupControlLabel>
                </RadioGroup>

                <FormLabel component="legend">Você se considera uma pessoa trans?</FormLabel>
                <RadioGroup aria-label="gender" name="trans" value={form.trans} onChange={onChange}>
                    <GroupControlLabel>
                        <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="nao" control={<Radio />} label="Não" />
                        <FormControlLabel value="talvez" control={<Radio />} label="Talvez" />
                        <FormControlLabel value="prefiroNaoResponder" control={<Radio />} label="Prefiro não responder" />
                    </GroupControlLabel>
                </RadioGroup>

                <FormLabel component="legend">Identificação racial</FormLabel>
                <RadioGroup aria-label="gender" name="race" value={form.race} onChange={onChange}>
                    <GroupControlLabel>
                        <FormControlLabel value="negro" control={<Radio />} label="Negro" />
                        <FormControlLabel value="branco" control={<Radio />} label="Branco" />
                        <FormControlLabel value="pardo" control={<Radio />} label="Pardo" />
                        <FormControlLabel value="amarelo" control={<Radio />} label="Amarelo" />
                        <FormControlLabel value="indigena" control={<Radio />} label="Indígena" />
                        <FormControlLabel value="outro" control={<Radio />} label="Outro" />
                        <FormControlLabel value="prefiroNaoResponder" control={<Radio />} label="Prefiro não responder" />
                    </GroupControlLabel>
                </RadioGroup>

                <FormLabel component="legend">Você considera seu bairro periférico?</FormLabel>
                <RadioGroup aria-label="gender" name="suburb" value={form.suburb} onChange={onChange}>
                    <GroupControlLabel>
                        <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="nao" control={<Radio />} label="Não" />
                        <FormControlLabel value="naoSei" control={<Radio />} label="Não sei" />
                        <FormControlLabel value="prefiroNaoResponder" control={<Radio />} label="Prefiro não responder" />
                    </GroupControlLabel>
                </RadioGroup>

            </Form>
        </Main>
    );
};

export default FormStep2;