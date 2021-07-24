import { Button, FormLabel, TextField, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import React from 'react';
import useForm from '../../Hooks/useForm';
import { Form, Titulo, Main, GroupControlLabel } from './style';

const FormStep3 = () => {

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
            <Titulo>Sobre o curso</Titulo>
            <Form onSubmit={onSubmitForm}>

                <FormLabel component="legend">Você participaria de todos os dias do curso?</FormLabel>
                <RadioGroup aria-label="gender" name="gender" value={form.gender} onChange={onChange}>
                    <GroupControlLabel>
                        <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="nao" control={<Radio />} label="Não" />
                    </GroupControlLabel>
                </RadioGroup>


                <FormLabel component="legend">Você possui internet para participar dos cursos de maneira online?</FormLabel>
                <RadioGroup aria-label="gender" name="internet" value={form.internet} onChange={onChange}>
                    <GroupControlLabel>
                        <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="nao" control={<Radio />} label="Não" />
                        <FormControlLabel value="naoSei" control={<Radio />} label="Não Sei" />
                    </GroupControlLabel>
                </RadioGroup>

                <FormLabel component="legend">Como você acessaria o curso?</FormLabel>
                <RadioGroup aria-label="gender" name="access" value={form.access} onChange={onChange}>
                    <GroupControlLabel>
                        <FormControlLabel value="celular" control={<Radio />} label="Celular" />
                        <FormControlLabel value="computador" control={<Radio />} label="Computador" />
                        <FormControlLabel value="tablet" control={<Radio />} label="Tablet" />
                        <FormControlLabel value="outro" control={<Radio />} label="Outro Dispositivo" />
                    </GroupControlLabel>
                </RadioGroup>

                <FormLabel component="legend">Aceita receber material de divulgação do Sapiência por e-mail e celular?</FormLabel>
                <RadioGroup aria-label="gender" name="receive" value={form.receive} onChange={onChange}>
                    <GroupControlLabel>
                        <FormControlLabel value="1" control={<Radio />} label="Sim" />
                        <FormControlLabel value="0" control={<Radio />} label="Não" />
                    </GroupControlLabel>
                </RadioGroup>

                <FormLabel component="legend">Aceito que as aulas sejam gravadas e que o material seja utilizado para divulgação do projeto.</FormLabel>
                <RadioGroup aria-label="gender" name="permission" value={form.permission} onChange={onChange}>
                    <GroupControlLabel>
                        <FormControlLabel value="1" control={<Radio />} label="Sim" />
                        <FormControlLabel value="0" control={<Radio />} label="Não" />
                    </GroupControlLabel>
                </RadioGroup>

            </Form>
        </Main>
    );
};

export default FormStep3;