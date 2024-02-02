import React, { Component } from "react";
import FormularioDeNotas from "./components/FormularioDeNotas/index.js";
import ListaDeNotas from "./components/ListaDeNotas/index.js";
import ListaCategorias from "./components/ListaCategorias/index.js";
import "./assets/app.css"
import "./assets/index.css"
import { categorias } from "./data/categorias.ts";
import { arrayNotas } from "./data/notas.ts";


class App extends Component {

  constructor() {
    super()
    this.categorias = new categorias()
    this.notas = new arrayNotas()
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioDeNotas
          categorias={this.categorias.categorias}
          criarNota={this.notas.adicionarNotas.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaCategorias
            adicionarCategoria={this.categorias.adicionarCategoria(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            categorias={this.categorias.categorias}
            apagarNota={this.notas.deletarNota}
            notas={this.notas.notas} />
        </main>
      </section>
    );
  }
}

export default App;
