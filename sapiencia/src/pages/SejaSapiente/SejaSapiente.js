import { Button, TextField } from '@material-ui/core';
import React from 'react';
import useForm from '../../Hooks/useForm';
import { Form, Titulo ,Main } from './style';

const SejaSapiente = () => {

    const initialState = {
        "name": "",
        "email": "",
        "phone": "",
        "age": 0,
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
            <Titulo>Seja sapiente</Titulo>
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

                <Button
                    type='submit'
                    variant="contained"
                    color="primary"
                    bg='brand.100'>Registrar</Button>
            </Form>
        </Main>
    );
};

export default SejaSapiente;