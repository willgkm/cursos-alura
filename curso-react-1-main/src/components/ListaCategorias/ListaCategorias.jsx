import React, { Component } from 'react';

class ListaCategorias extends Component {
  
  constructor(){
    super()
    this.state = {categorias:[]}
  }
  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias.bind(this))
  }
  _novasCategorias(categorias){
    this.setState(...this.state, categorias)
  }

  _handleEventoInput(e) {
    if (e.key === "Enter") {
      let valorCategoria = e.target.value
      this.props.adicionarCategoria(valorCategoria)
    }
  }

  render() {
    return (
      <section>
        <ul>
          {this.state.categorias.map((categorias, index) => {
              return <li key={index}> {categorias}</li>
            })}
        </ul>
        <input type="text"
          className='lista-categoria_input'
          placeholder='Adicionar Categoria'
          onKeyUp={this._handleEventoInput.bind(this)} />
      </section>
    );
  }
}

export default ListaCategorias;