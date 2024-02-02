import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function DadosEntrega({ aoEnviar }) {

  const [endereço, setEndereço] = useState("")
  const [cep, setCep] = useState("")
  const [numero, setNumero] = useState("")
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      aoEnviar({ endereço, cep, numero, cidade, estado })
    }}>
      <TextField
        id="endereço"
        label="Endereço"
        name='endereço'
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
        value={endereço}
        onChange={(event) => { setEndereço(event.target.value) }} />
      <TextField
        id="cep"
        label="CEP"
        name='cep'
        type="number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cep}
        onChange={(event) => { setCep(event.target.value) }} />
      <TextField
        id="numero"
        label="Numero"
        name='numero'
        type="number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={numero}
        onChange={(event) => { setNumero(event.target.value) }} />
      <TextField
        id="estado"
        label="Estado"
        name='estado'
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
        value={estado}
        onChange={(event) => { setEstado(event.target.value) }} />
      <TextField
        id="cidade"
        label="Cidade"
        name='cidade'
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cidade}
        onChange={(event) => { setCidade(event.target.value) }} />
      <Button
        type='submit'
        variant="contained"
        color="primary"
        fullWidth> Finalizar </Button>
    </form>
  );
}

export default DadosEntrega;