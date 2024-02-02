import React, { Component } from "react";
import "./CardNota.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class CardNota  extends Component {

  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice)
  }

  render() { 
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho ">
          <h3 className="card-nota_titulo" >{this.props.title}</h3>
          <FontAwesomeIcon  icon={faTimes} 
                            onClick={this.apagar.bind(this)}/>
        <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto ">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNota ;