import { Button, FormLabel, TextField, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import React from 'react';
import useForm from '../../Hooks/useForm';
import FormStep2 from './formStep2';
import FormStep3 from './formStep3';
import { Form, Titulo, Main } from './style';

const FormStep1 = () => {

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
            <Form onSubmit={onSubmitForm}>
                <TextField
                    autoFocus
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="Nome"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    type='email'
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="E-mail"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    name={'phone'}
                    value={form.phone}
                    onChange={onChange}
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="Celular (com DDD)"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    name={'age'}
                    value={form.age}
                    onChange={onChange}
                    type="number"
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="Idade"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    name={'neighbor'}
                    value={form.neighbor}
                    onChange={onChange}
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="Bairro"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    name={'city'}
                    value={form.city}
                    onChange={onChange}
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="Cidade"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                
                <h2>Escolaridade</h2>
                <RadioGroup aria-label="gender" name="clientSituation" value={form.clientSituation} onChange={onChange}>
                    <FormControlLabel value="EFI" control={<Radio />} label="Ensino Fundamental incompleto" />
                    <FormControlLabel value="EFC" control={<Radio />} label="Ensino fundamental completo" />
                    <FormControlLabel value="EMI" control={<Radio />} label="Ensino médio incompleto" />
                    <FormControlLabel value="EMC" control={<Radio />} label="Ensino médio completo" />
                    <FormControlLabel value="ESI" control={<Radio />} label="Ensino superior incompleto" />
                    <FormControlLabel value="ESC" control={<Radio />} label="Ensino superior completo" />
                </RadioGroup>
            </Form>
        </Main>
    );
};

export default FormStep1;