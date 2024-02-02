import React, { Component } from "react";
import "./FormularioDeNotas.css"

class FormularioDeNotas extends Component {
  
  constructor(props){
    super(props);
    this.title = "";
    this.text = "";
    this.categoria ="Sem Categoria"
    this.state = {categorias:[]}
  }  

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }
  _novasCategorias(){
    this.setState({...this.state, categorias})
  }

  _handlerTitleChange(evento){
    evento.stopPropagation();    
    this.title = evento.target.value
  }
  _handlerTextChange(evento){
    evento.stopPropagation();    
    this.text = evento.target.value
  }

  _handlerCategoria(evento){
    evento.stopPropagation();    
    this.categoria = evento.target.value
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();    
    this.props.criarNota(this.title, this.text, this.categoria)
  }

  render() {
    return (
      <form className="form-cadastro"
            onSubmit={this._criarNota.bind(this)}>
        <select onChange={this._handlerCategoria.bind(this)} >
          <option>
            Sem Categoria
          </option>
          {this.state.categorias.map((categoria, index => {
            return <option key={index}>{categoria}</option>
          }))}
        </select>
        <input  className="form-cadastro_input" 
                type="text" 
                placeholder="Titulo" 
                onChange={this._handlerTitleChange.bind(this)}
        />
        <textarea className="form-cadastro_input" 
                  placeholder="Escreva sua nota"
                  onChange={this._handlerTextChange.bind(this)}
                  row={15} />
        <button className="form-cadastro_input form-cadastro_submit" >Criar nota</button>
      </form>
    )

  }
}

export default FormularioDeNotas