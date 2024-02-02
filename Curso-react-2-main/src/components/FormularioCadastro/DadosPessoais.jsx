import React, { useState , useContext } from 'react';
import { TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar  }) {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("")
  const [cpf, setCpf] = useState("")
  const [promocao, setPromocao] = useState(false)
  const [novidade, setNovidade] = useState(false)
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={
        (event) => {
          event.preventDefault();
          if(possoEnviar()){
            aoEnviar({ nome, sobrenome, cpf, promocao, novidade })
          } 
        }
      }
    >
      <TextField
        id="nome"
        label="Nome"
        name='nome'
        variant="outlined"
        fullWidth
        margin="normal"
        value={nome}
        onChange={
          (evento) => {
            setNome(evento.target.value);
          }
        }
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        name='sobrenome'
        variant="outlined"
        fullWidth
        margin="normal"
        value={sobrenome}
        onChange={
          (evento) => {
            setSobrenome(evento.target.value);
          }
        }
      />

      <TextField
        id="CPF"
        label="CPF"
        name='cpf'
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        name='promocao'
        label="Promoção"
        checked={promocao}
        control={
          <Checkbox
            onChange={
              (evento) => {
                setPromocao(evento.target.checked);
              }
            }
          />
        }
      />
      <FormControlLabel
        name='novidade'
        label="Novidade"
        checked={novidade}
        control={
          <Checkbox
            onChange={
              (evento) => {
                setNovidade(evento.target.checked);
              }
            }
          />
        }
      />

      <Button disableElevation type="submit" variant="contained" color="primary">Proximo</Button>
    </form>
  );
}

export default DadosPessoais;
