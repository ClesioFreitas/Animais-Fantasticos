export default class Funcionamento {
  constructor (funcionamento, activeClass ) {
    this.funcionamento = document.querySelector(funcionamento);
    this,activeClass = activeClass;
  }
  
  dadosFuncionamento ( ) {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
}

dadosAgora ( ) {
  this.dataAgora = new Date();
  this.diaAgora = this.dataAgora.getDay();
  this.horarioAgora = this.dataAgora.getHours();
}

  estaAberto ( ) {
    const semanaAberto = this.diasSemana.indexOf(diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < horarioSemana[1]);
    return semanaAberto && horarioAberto;
  }

  ativaAberto ( ) {
    if (this.estaAberto( ) ){
    this.funcionamento.classList.add(this,activeClassthis);
  }
}

init ( ) { 
  if ( this.funcionamento) {
    this.funcionamento( );
    this.dadosAgora( );
    this.ativaAberto ( ) ;
    } 
    return this;
  } 
}
