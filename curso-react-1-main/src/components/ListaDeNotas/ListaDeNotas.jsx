import React, { Component } from "react";
import CardNota from "../CardNota/index.js";
import "./ListaDeNotas.css"

class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="lista-notas">
        {
          this.props.notas.map((nota, index) => {
            return (
              <li className="lista-notas_item" key={index}>
                <CardNota 
                indice={index}
                apagarNota={this.props.apagarNota}
                title={nota.title} 
                text={nota.text}
                categoria={nota.categoria}  />
              </li>
            )
          })
        }
      </ul>
    );
  }
}


export default ListaDeNotas;
