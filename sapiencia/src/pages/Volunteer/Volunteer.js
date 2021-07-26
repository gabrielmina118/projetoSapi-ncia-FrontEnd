import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/coordinator';
import  useForm  from '../../Hooks/useForm'
import { Container, FormContainer } from './styles';
import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Radio,
  RadioGroup
} from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { BASE_URL } from '../../constants/urls';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Volunteer = () => {
  const history = useHistory();
  const [form, onChange, onChangeRadio, clear] = useForm({
    name: '',
    obs: '',
    birthday: '',
    cpf: '',
    rg: '',
    expeditor: '',
    address: '',
    email: '',
    cellphone: '',
    phone: '',
    department: '',
    hours: '',
    acordo1: false,
    acordo2: false,
    acordo3: false,
    acordo4: false
  });

  const SendForm = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      obs: form.obs,
      birthday: form.birthday,
      cpf: form.cpf,
      rg: form.rg,
      expeditor: form.expeditor,
      address: form.address,
      email: form.email,
      cellphone: form.cellphone,
      phone: form.phone,
      department: form.department,
      hours: form.hours,
      acordo1: form.acordo1,
      acordo2: form.acordo2,
      acordo3: form.acordo3,
      acordo4: form.acordo4
    };
    axios
      .post(`${BASE_URL}/volunteers/datatoemail`, body)
      .then((res) => {
        alert('Formulário enviado. Aguarde o contato em até 72 horas.');
        clear();
        goToHome(history);
      })
      .catch((err) => {
        alert('Desculpe, houve um problema. Tente novamente.');
      });
  };

  return (
    <div>
      <FormContainer onSubmit={SendForm}>
        <Container>
        <TextField
          name="name"
          value={form.name}
          label="Nome completo"
          variant="outlined"
          color="primary"
          style={{ backgroundColor: grey[50] }}
          multiline
          required
          onChange={onChange}
          placeholder="No caso de pessoas trans, coloque o nome que se identifica. Dane-se o RG!"
        />
        </Container>
        <TextField
          name="obs"
          value={form.obs}
          label="Observações sobre nome"
          variant="outlined"
          color="primary"
          style={{ backgroundColor: grey[50] }}
          multiline
          required
          onChange={onChange}
          placeholder="Como prefere que as pessoas se refiram a você?"
        />
        <TextField
          name="birthday"
          value={form.birthday}
          label="Data de nascimento"
          variant="outlined"
          color="primary"
          style={{ backgroundColor: grey[50] }}
          required
          onChange={onChange}
          placeholder="dd/mm/aaaa"
        />
        <TextField
          name="cpf"
          value={form.cpf}
          label="CPF"
          variant="outlined"
          color="primary"
          style={{ backgroundColor: grey[50] }}
          required
          onChange={onChange}
          placeholder="Somente números"
        />
        <TextField
          name="rg"
          value={form.rg}
          label="RG"
          variant="outlined"
          color="primary"
          style={{ backgroundColor: grey[50] }}
          required
          onChange={onChange}
          placeholder="Somente números"
        />
        <TextField
          name="expeditor"
          value={form.expeditor}
          label="Órgão Expedidor do RG"
          variant="outlined"
          color="primary"
          style={{ backgroundColor: grey[50] }}
          required
          onChange={onChange}
          placeholder="Órgão/Estado"
        />
        <TextField
          name="address"
          value={form.address}
          label="Endereço"
          variant="outlined"
          color="primary"
          style={{ backgroundColor: grey[50] }}
          multiline
          required
          onChange={onChange}
          placeholder="Rua/Av, Número, CEP, Cidade e Estado"
        />
        <TextField
          name="email"
          value={form.email}
          label="E-mail (Coloque o que você mais usa)"
          variant="outlined"
          color="primary"
          style={{ backgroundColor: grey[50] }}
          required
          onChange={onChange}
          placeholder="Preencha aqui"
        />
        <TextField
          name="cellphone"
          value={form.cellphone}
          label="Celular (Com DDD)"
          variant="outlined"
          color="primary"
          style={{ backgroundColor: grey[50] }}
          required
          onChange={onChange}
          placeholder="Somente números"
        />
        <TextField
          name="phone"
          value={form.phone}
          label="Telefone Fixo (Com DDD)"
          variant="outlined"
          color="primary"
          style={{ backgroundColor: grey[50] }}
          required
          onChange={onChange}
          placeholder="Somente números"
        />
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Em qual departamento você será voluntário?{' '}
          </FormLabel>
          <RadioGroup
            aria-label="department"
            name="department"
            value={form.department}
            onChange={onChange}
          >
            <FormControlLabel
            color="primary"
              value="Administrativo"
              control={<Radio />}
              label="Departamento Administrativo"
            />
            <FormControlLabel
              value="Criação e Relacionamento"
              control={<Radio />}
              label="Departamento de Criação e Relacionamento"
            />
            <FormControlLabel
              value="Marketing"
              control={<Radio />}
              label="Departamento de Marketing"
            />
            <FormControlLabel
              value="Pedagógico"
              control={<Radio />}
              label="Departamento Pedagógico"
            />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Quantas horas por semana, no mínimo, você pode dedicar ao Sapiência?
          </FormLabel>
          <RadioGroup
            aria-label="hours"
            name="hours"
            value={form.hours}
            onChange={onChange}
          >
            <FormControlLabel value="3h" control={<Radio />} label="3 horas" />
            <FormControlLabel value="4h" control={<Radio />} label="4 horas" />
            <FormControlLabel value="5h" control={<Radio />} label="5 horas" />
            <FormControlLabel
              value="6h+"
              control={<Radio />}
              label="6 horas ou mais"
            />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" required>
          <FormLabel component="legend">Nos diga se está de acordo: </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  style={{ color: 'black' }}
                  checked={form.acordo1}
                  onChange={onChangeRadio}
                  name="acordo1"
                />
              }
              label="Eu estou ciente de que me comprometo a auxiliar o Sapiência na implementação e desenvolvimento de seus objetivos institucionais, efetuando atividades no departamento selecionado acima, observando as diretrizes aqui traçadas, bem como aquelas informadas pelo responsável da área de Voluntariado (conforme o caso)."
            />
            <FormControlLabel
              control={
                <Checkbox
                  style={{ color: 'black' }}
                  checked={form.acordo2}
                  onChange={onChangeRadio}
                  name="acordo2"
                />
              }
              label="Eu estou ciente de que despesas previamente autorizadas pelo Sapiência e realizadas em benefício deste poderão ser reembolsadas ao voluntário mediante a comprovação dos gastos."
            />
            <FormControlLabel
              control={
                <Checkbox
                  style={{ color: 'black' }}
                  checked={form.acordo3}
                  onChange={onChangeRadio}
                  name="acordo3"
                />
              }
              label="Eu estou ciente de que o presente Termo de Adesão tem prazo indeterminado, tendo seu término efetivado com o desligamento do(a) voluntário(a), de acordo com a vontade de uma das partes."
            />
            <FormControlLabel
              control={
                <Checkbox
                  style={{ color: 'black' }}
                  checked={form.acordo4}
                  onChange={onChangeRadio}
                  name="acordo4"
                />
              }
              label="Eu estou ciente de que o serviço voluntário, conforme a Lei nº 9.608, de 18 de fevereiro de 1998, “não gera vínculo empregatício, nem obrigação de natureza trabalhista, previdenciária ou afim”, não cabendo portanto, ao(à) voluntário(a) qualquer remuneração ou ressarcimento pelos serviços prestados ao Sapiência."
            />
          </FormGroup>
        </FormControl>

        <Button
          onClick={() => goToHome(history)}
          variant="outlined"
          style={{ borderColor: 'black' }}
        >
          Início
        </Button>
        <Button
          type="submit"
          onClick={SendForm}
          variant="contained"
          style={{ color: 'white', backgroundColor: 'black' }}
        >
          Enviar Formulário
        </Button>
      </FormContainer>
    </div>
  );
};

export default Volunteer;
