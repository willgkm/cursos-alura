
class arrayNotas {

  private notas
  private inscritos

  constructor(){
    this.notas = [];
  }

  adicionarNotas(title,text,categoria){
    const novaNota = new Nota(title,text,categoria)
    console.log(novaNota);
    
    this.notas.push(novaNota);
  }

  deletarNota(index) {
    this.notas.splice(index,1);
  }

  inscrever(func) {
    this.inscritos.push(func);
  }

  notificar() {
    this.inscritos.array.forEach(func => {
      func(this.notas)
    });
  }

}

class Nota{

  private title
  private text
  private categoria

  constructor(title,text,categoria){
    this.title = title
    this.text = text
    this.categoria = categoria
  }
}


export {arrayNotas}