export default class Modal {
  constructor (botaoAbrir, botaoFechar, containerModal) {
  this.botaoAbrir = document.querySelector(botaoAbrir, botaoFechar, containerModal);
  this.botaoFechar = document.querySelector();
  this.containerModal = document.querySelector();

  //bind this ap callback para 
  //fazer referência ao objeto da class
  this.eventToggleModal = this.eventToggleModal.bind(this); 
  this.cliqueForaModal = this.cliqueForaModal.bind(this); 
  }


  //abre o fecha o modal
  toggleModal ( ) {
    this.containerModal.classList.toggle('ativo');
  }

  //adicona o evento de toggle ao modal
  eventToggleModal ( event ) {
    event.preventDefault( );
    this.toggleModal ( );
  }


  //fecha o modal ao  clicar ao lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal( );
    }
    return this;
  }


//adicona os  eventos aos elementos do modal 
  addModalEvent ( ) {
    this.botaoAbrir.addEventListener('click', this. event.preventDefault( ));
    this.botaoFechar.addEventListener('click', this. event.preventDefault( ));
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }


  init ( ) {
    if (this.botaoAbrir && this,botaoFechar && this.containerModal) {
      this.addModalEvent  ( ) ;
    }
  }
}