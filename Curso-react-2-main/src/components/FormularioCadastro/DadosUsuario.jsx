import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      if(possoEnviar()){
        aoEnviar({email,senha});
      }
    }}
    >
      <TextField
        id="email"
        label="Email"
        name='email'
        type="email"
        required
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(event) => { setEmail(event.target.value) }}
      />
      <TextField
        id="senha"
        label="Senha"
        name='senha'
        type="password"
        required
        variant="outlined"
        fullWidth
        margin="normal"
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
      />
      <Button
        type='submit'
        variant="contained"
        color="primary"
      > Proximo </Button>
    </form>
  )

}

export default DadosUsuario;