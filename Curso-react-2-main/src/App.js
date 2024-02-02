import React, { Component } from 'react';
import { Container, Typography } from '@mui/material';
import { validarCPF, validarSenha } from './models/cadastro';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import ValidacoesCadastro from './context/ValidacoesCadastro';

class App extends Component {
  render(){
    return (
    <Container
      component="article"
      maxWidth="sm">

      <Typography
        align='center'
        variant='h1'
        component="h2" >Formulario de cadastro</Typography>
        
      <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha }}>
        <FormularioCadastro onSubmit={onSubmitData} />
      </ValidacoesCadastro.Provider>

    </Container >
  );
}
}

function onSubmitData(dados) {
  console.log(dados);
}

export default App;